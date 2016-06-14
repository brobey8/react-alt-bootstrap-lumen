<?php

namespace App\Helpers\Contracts;

Interface EventAlertContract
{

    public function checkEvent($pusher, $box, $event, $account);

    public function checkGeo($pusher, $box, $event, $account, $location);


}
