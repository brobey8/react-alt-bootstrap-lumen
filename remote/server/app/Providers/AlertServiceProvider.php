<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Helpers\EventAlert;

class AlertServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
         $this->app->bind('App\Helpers\Contracts\EventAlertContract', function(){

            return new EventAlert();

        });
    }

 /**
     * Get the services provided by the provider.
     *
     * @return array
     */
    public function provides()
    {
        return ['App\Helpers\Contracts\EventAlertContract'];
    }
}
