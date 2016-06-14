<?php namespace App\Transformers;

use App\User;  
use League\Fractal\TransformerAbstract;

class UserTransformer extends TransformerAbstract {

    protected $availableIncludes = [
        'account'
    ];

    public function transform(User $user)
    {
        return [
            'name' => $user->name,
        ];
    }

    public function includeAccount(User $user)
    {
        $account = $user->account;
        return $this->collection($account, newAccountTransformer);
    }

}