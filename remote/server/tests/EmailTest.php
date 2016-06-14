<?php

use App\Helpers\EventAlert;
use App\Box;
use Illuminate\Config;

class EmailTest extends Laravel\Lumen\Testing\TestCase
{
    /**
     * Creates the application.
     *
     * @return \Laravel\Lumen\Application
     */

    public function createApplication()
    {
        //return require __DIR__.'/../bootstrap/app.php';
    }

    public function test() {
        $viewVars = array(
            'boxId'           => '12345678',
            'message'         => 'You are recieving this alert as you have left the boundaries specified in this rule: '.'geofence'.' on the device: '.'12345678',
            'type'            => 'geofence'
        );

        ob_start();
        include 'app/Helpers/Email/Templates/alert.php';
        $html = ob_get_clean();
        $html = wordwrap($html, 50, "\n", true);
        echo $html;
        die;
        $success = Mail::send('emails.notify', ['body' => $html], function ($m) {
            $m->getSwiftMessage()->setEncoder(\Swift_Encoding::get8BitEncoding());
            $m->from('alert@pintrax.com.au', 'pintrax');
            $m->to(explode(',','ben.robey@vtron.com.au'))->subject('Geo Alert!');
        });

        print_r($success);
    }
}