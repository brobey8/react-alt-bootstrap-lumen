<?php namespace App\Transformers;

use App\Simple;  
use League\Fractal\TransformerAbstract;

class SimpleTransformer extends TransformerAbstract {


    public function transform(Simple $simple)
    {
        return [
            'name' => $simple->name,
        ];
    }


}