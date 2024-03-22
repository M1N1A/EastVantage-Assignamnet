<?php

namespace App\Http\Controllers;

use App\Roles;
use Illuminate\Support\Facades\Validator;
use App\Users;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UsersController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
       
        $Users = Users::get()->toArray();
        foreach($Users as $t => $v){
            // DB::enableQueryLog();
            $roles = Roles::select("name")->whereIn('id',explode(',',$v['roles']))->get()->toArray();
            // dd(DB::getQueryLog());
            $Users[$t]['roles'] = array_column($roles, 'name');
        }
        return ($Users);
    }

    
    /**
     * Store a newly created users in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        
        $validator = Validator::make($request->all(), [
            'email' => [
              'required',
              'max:255', 
              function ($attribute, $value, $fails) use ($request) {
                  $result = Users::where('email', $request->email)->count();
                  if($result>0){
                      return $fails('The email has already been exist.');
                  }
              }
          ], 
          'name' => ['required'],
          'roles' => ['required'],   
        ]);

        if ($validator->fails())   //check all validations are fine, if not then redirect and show error messages
      {
          
        return response()->json(['success'=>FALSE, 'errors'=>$validator->errors()]);
          
      }
      else
      {
        $insertData = array(
           
            'Name' => $request->get('name'),
            'email' => $request->get('email'),
            'roles' => $request->get('roles'),
          );

        $data = DB::table('Users')->insert($insertData);
    
        return response()->json(['success'=>TRUE, 'message'=>'Users Data is successfully saved']);

      }
    }

    public function roles()
    {
       
        $Users = Roles::get()->toArray();
        return ($Users);
    }

}
