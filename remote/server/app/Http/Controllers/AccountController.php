<?php namespace App\Http\Controllers;
use App\Box;
use App\Pin;
use App\User;
use App\Account;
use Auth;
use App\Transformers\AccountTransformer;
use Illuminate\Http\Request;
use League\Fractal\Manager;
use League\Fractal\Resource\Collection;
use League\Fractal\Resource\Item;
use Illuminate\Support\Facades\Hash;

class AccountController extends ApiController {

    protected $account;
    function __construct(Account $account)
    {
        $this->account = $account;
    }

    /**
     * @param Request $request
     * @return mixed
     */
    public function store(Request $request)
    {
        $this->account->fullname = $request->json()->get('fullname');
        $this->account->plan = $request->json()->get('plan');
        $this->account->boxs = $request->json()->get('boxs');
        $this->account->save();
        return $this->respondCreated('Account was created');
    }


    public function update(Request $request,$id){
        $this->account = Account::find(Account::where('boxs.id','=',$id)->get()[0]->_id);
        $index = 0;
        $found = false;
        foreach($this->account->boxs as $box){
          if (strcmp($box['id'], $id) === 0){ 
                $found = true;
                break;
          }
          $index++;
        }

        if ($found){
          $boxs = $this->account->boxs;
          $boxs[$index] = $request->json()->get('data');
          $this->account->boxs = array_values($boxs);
          $this->account->save();
        }

        return $this->respondOk($this->account);
    }

    public function remove_geo(Request $request,$id){

        $this->account = Auth::User()->account;//Account::find(Account::where('boxs.id','=',$id)->get()[0]->_id);

        //check to see if a geo bound is already set and if so just update that one
        $new_bound = $request->json()->get('data');
        $index = 0;
        $found = false;
        foreach($this->account->geofences as $geofence){
          if (strcmp($geofence['center'][0], $new_bound['center'][0]) === 0 &&
              strcmp($geofence['center'][1], $new_bound['center'][1]) === 0 ){
                $found = true;
                break;
            }
          $index++;
        }

        if ($found){
          $geofences = $this->account->geofences;
          unset($geofences[$index]);
          $this->account->geofences =array_values($geofences);
          $this->account->save();
        }

        return $this->respondOk($this->account);

    }

    public function update_geo(Request $request,$id){

        $this->account = Auth::User()->account;//Account::find(Account::where('boxs.id','=',$id)->get()[0]->_id);

        //check to see if a geo bound is already set and if so just update that one
        $new_bound = $request->json()->get('data');
        $index = 0;
        $found = false;
        foreach($this->account->geofences as $geofence){
          if (strcmp($geofence['center'][0], $new_bound['center'][0]) === 0 &&
              strcmp($geofence['center'][1], $new_bound['center'][1]) === 0 ){
                $found = true;
                break;
            }
          $index++;
        }

        if (!$found){
          if (!empty($this->account->geofences)){
            $this->account->geofences = array_merge($this->account->geofences, array($new_bound));
          }else{
            $this->account->geofences = array($new_bound);
          }
        }else{
          $geofences = $this->account->geofences;
          $geofences[$index] = $new_bound;
          $this->account->geofences = $geofences;
        }
       
        $this->account->save();
        return $this->respondOk($this->account);

    }
    /**
     * @param $userId
     * @param Manager $fractal
     * @param AccountTransformer $accountTransformer
     * @return \Illuminate\Http\JsonResponse
     */
    public function show(Manager $fractal, AccountTransformer $accountTransformer)
    {

        $user = Auth::User()->account;

        //$item = new Item($account, $accountTransformer);
        //$data = $fractal->createData($item)->toArray();

        return $this->respond($user);
    }


}