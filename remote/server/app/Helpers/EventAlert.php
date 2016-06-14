<?php

namespace app\Helpers;

use App\Helpers\Contracts\EventAlertContract;
use Mail;
use App\Alert;

class EventAlert implements EventAlertContract
{
    public function checkGeo($pusher, $box, $event, $account, $location)
    {

        if ($event->type == 'location'){
          //get the last pin
          $pin = $box->pins()->where('type','location')->orderBy('created_at', 'desc')->take(2)->skip(1)->get();
          $pin = $pin[0];
          $location_2 = str_replace(['[',']'], "", $pin->loc['coordinates']);
          $location_2 = explode(",", $location_2);
          $location_2 = array($location_2[1],$location_2[0]);

          $location = array($location[1],$location[0]);

          foreach ($account->geofences as $geofence){
              if ($geofence['device_uuid'] === $box->device_uuid && $geofence['active']) {

                  $center = array($geofence['center'][0],$geofence['center'][1]);

                  $geotools = new \League\Geotools\Geotools();
                  $coordAA   = new \League\Geotools\Coordinate\Coordinate($location);
                  $coordBA   = new \League\Geotools\Coordinate\Coordinate($center);
                  $distance_this = $geotools->distance()->setFrom($coordAA)->setTo($coordBA);

                  $coordAB   = new \League\Geotools\Coordinate\Coordinate($location_2);
                  $coordBB   = new \League\Geotools\Coordinate\Coordinate($center);
                  $distance_last = $geotools->distance()->setFrom($coordAB)->setTo($coordBB);

                  if ( ($distance_this->flat() > $geofence['radius']) && ($distance_last->flat() < $geofence['radius'])){
                      $viewVars = array(
                          'boxId'           => $box->device_uuid,
                          'message'         => 'You are recieving this alert as you have left the boundaries specified in this rule: '.$geofence['name'].' on the device: '.$box->device_uuid,
                          'type'            => 'boundary'
                      );
                      Mail::send('emails.notify', ['body' => $this->getEmailContent($viewVars, 'alert.php')], function ($m) use ($account) {
                          $m->getSwiftMessage()->setEncoder(\Swift_Encoding::getBase64Encoding());
                          $m->from('alert@pintrax.com.au', 'pintrax');
                          $m->to(explode(',',$account->contact))->subject('Geofence Alert!');
                      });

                      $alert = new Alert;
                      $alert = $this->copy($event, $alert);
                      $alert->alert = "Geo Alert";
                      $box->pins()->save($alert);
                      $pusher->trigger('box_channel_' . $account->fullname, 'new_alert', $alert->alert);
                  }

                  if ( ($distance_this->flat() < $geofence['radius']) && ($distance_last->flat() > $geofence['radius'])){
                      $viewVars = array(
                          'boxId'           => $box->device_uuid,
                          'message'         => 'You are recieving this alert as you have entered the boundaries specified in this rule: '.$geofence['name'].' on the device: '.$box->device_uuid,
                          'type'            => 'boundary'
                      );
                      Mail::send('emails.notify', ['body' => $this->getEmailContent($viewVars, 'alert.php')], function ($m) use ($account) {
                          $m->getSwiftMessage()->setEncoder(\Swift_Encoding::getBase64Encoding());
                          $m->from('alert@pintrax.com.au', 'pintrax');
                          $m->to(explode(',',$account->contact))->subject('Geofence Alert!');
                      });

                      $alert = new Alert;
                      $alert = $this->copy($event, $alert);
                      $alert->alert = "Geo Alert";
                      $box->pins()->save($alert);
                      $pusher->trigger('box_channel_' . $account->fullname, 'new_alert', $alert->alert);
                  }

              }
          }
        }
    }

    public function checkEvent($pusher, $box, $event, $account)
    {

        //lets check the events
        if ($event->type == 'start'){
          foreach ($account->boxs as $boxconfig){
              if ($boxconfig['id'] === $box->device_uuid){
                if ($boxconfig['box_config']['moving_alert']){
                  if ($event['event']['speed'] > $boxconfig['box_config']['speed_value']){
                      $viewVars = array(
                          'boxId'           => $box->device_uuid,
                          'message'         => $boxconfig['bod_name']. ' Has started moving.',
                          'type'            => 'start'
                      );
                      Mail::send('emails.notify', ['body' => $this->getEmailContent($viewVars, 'alert.php')], function ($m) use ($account) {
                          $m->getSwiftMessage()->setEncoder(\Swift_Encoding::getBase64Encoding());
                          $m->from('alert@pintrax.com.au', 'pintrax');
                          $m->to(explode(',',$account->contact))->subject('Moving Alert!');
                      });

                      $alert = new Alert;
                      $alert = $this->copy($event, $alert);
                      $alert->alert = "Moving Alert";
                      $box->pins()->save($alert);
                      $pusher->trigger('box_channel_' . $account->fullname, 'new_alert', $alert->alert);
                  }
                }
              }
          }
        }

        if ($event->type == 'location'){

          foreach ($account->boxs as $boxconfig){
              if ($boxconfig['id'] === $box->device_uuid){

                if ($boxconfig['box_config']['speed_alert']){
                  if ($event['event']['speed'] > $boxconfig['box_config']['speed_value']){
                      $viewVars = array(
                          'boxId'           => $box->device_uuid,
                          'message'         => "<strong>Device  ". $boxconfig['box_name'] ."  is going over the speed limit - set at " . $boxconfig['box_config']['speed_value']  . " </strong>",
                          'type'            => 'speed'
                      );
                      Mail::send('emails.notify', ['body' => $this->getEmailContent($viewVars, 'alert.php')], function ($m) use ($account) {
                          $m->getSwiftMessage()->setEncoder(\Swift_Encoding::getBase64Encoding());
                          $m->from('alert@pintrax.com.au', 'pintrax');
                          $m->to(explode(',',$account->contact))->subject('Speed Alert!');
                      });

                      $alert = new Alert;
                      $alert = $this->copy($event, $alert);
                      $alert->alert = "Speed Alert!";
                      $box->pins()->save($alert);
                      $pusher->trigger('box_channel_' . $account->fullname, 'new_alert', $alert->alert);
                  }

                }
                if ($boxconfig['box_config']['battery_alert']){
                  if ($event['event']['percent'] < $boxconfig['box_config']['battery_value']){
                      $viewVars = array(
                          'boxId'           => $box->device_uuid,
                          'message'         => "<strong>Device  ". $boxconfig['box_name']  ."  battery is low - set at " . $boxconfig['box_config']['battery_value']  . " </strong>",
                          'type'            => 'battery'
                      );
                      Mail::send('emails.notify', ['body' => $this->getEmailContent($viewVars, 'alert.php')], function ($m) use ($account) {
                          $m->getSwiftMessage()->setEncoder(\Swift_Encoding::getBase64Encoding());
                          $m->from('alert@pintrax.com.au', 'pintrax');
                          $m->to(explode(',',$account->contact))->subject('Battery Alert!');
                      });

                      $alert = new Alert;
                      $alert = $this->copy($event, $alert);
                      $alert->alert = "Battery Alert!";
                      $box->pins()->save($alert);
                      $pusher->trigger('box_channel_' . $account->fullname, 'new_alert', $alert->alert);
                  }

                }
  
              }
          }
        }

    }

    private function getEmailContent($viewVars, $template) {
        ob_start();
        include 'Email/Templates/'.$template;
        $html = ob_get_clean();
        return $html;
    }

    private function copy($source, $target){

      $target->device_uuid = $source->device_uuid;
      $target->type = $source->type;
      $target->version = $source->version;
      $target->loc = $source->loc;
      $target->time = $source->time;
      $target->event = $source->event;
      $target->alert = $source->alert;
      $target->viewed = false;
      
      return $target;

  }

}
