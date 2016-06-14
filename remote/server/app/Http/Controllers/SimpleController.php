<?php namespace App\Http\Controllers;
use App\Simple;
use App\Transformers\SimpleTransformer;
use Auth;
use Illuminate\Http\Request;
use League\Fractal\Manager;
use League\Fractal\Resource\Collection;
use League\Fractal\Resource\Item;
use Illuminate\Support\Facades\Hash;

class SimpleController extends ApiController {
    protected $validationRules = [
        'name'         => 'required|unique:simples',
    ];

    protected $simple;
    function __construct(Simple $simple)
    {
        $this->simple = $simple;
    }
    /**
     * @param Manager $fractal
     * @param BoxTransformer $boxTransformer
     * @return \Illuminate\Http\JsonResponse
     */
    public function index(Manager $fractal, SimpleTransformer $simpleTransformer)
    {

    $data = json_decode('[
          {"id": 1, "title": "Box Compact",
            "price": 69.95, "inventory": 2,
            "description":"The compact BOX is perfect for small vehicles that may or may not have power. It comes complete with a strap attachment and a micro usb port. Simply turn on and it will start logging your location and details to the cloud.",
            "image": "../common/assets/ipad-mini.png"},
          {"id": 2, "title": "Box Sports",
            "price": 99.99, "inventory": 10,
            "description":"The sports BOX is perfect for high intensity situations. The sealed case is water, dust and shock proof. If you are in to extreme sports or work in extreme conditions this BOX is the perfect match. 100% replacement garantee.",
            "image": "../common/assets/t-shirt.png"},
          {"id": 3, "title": "Box Vehicle",
            "price": 129.99, "inventory": 5,
            "description":"The vehicle BOX is perfect for powered applications that involve OBD-II. We support all modes of operation and the set of standard PIDs. 4 screw holes are provided for mounting the box internally. Plug and Play.",
            "image": "../common/assets/sucker.png"}
        ]');
        return $this->respondWithCORS($data);
    }
  

}
