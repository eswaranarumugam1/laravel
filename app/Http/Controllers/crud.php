<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Model\Students;
use Hash;
use Session;


class crud extends Controller
{

	public function index(){
		return view('crud/index');
	}

	public function view(){
		return view('crud/view');
	}

	public function save_user(Request $request){

		$students = new Students();
		$students->full_name = $request->input('first_name');
		$students->email = $request->input('email');
		$students->password = sha1($request->input('password'));
		$students->save();
		Session::flash('message','Users added successfully');
		return redirect('/');
		//$users = Students::all();
		//var_dump($users);exit;
	}

	public function user_list(){
		$users = Students::all();
		return view('crud/view')->with('users',$users);

	}
	public function edit($id){
		$student = Students::find($id);
		return view('crud/edit')->with('stu', $student);
	}

	public function update_user(Request $request){
		$id = $request->input('user_id');
		$students = Students::find($id);
		$students->full_name = $request->input('first_name');
		$students->email = $request->input('email');
		$students->password = sha1($request->input('password'));
		$students->save();
		Session::flash('message','Users updated successfully');
		return redirect('edit/'.$id);
		//$users = Students::all();
		//var_dump($users);exit;
	}

	public function delete($id){
		Students::find($id)->delete();
		Session::flash('message','Users Deleted successfully');
		return redirect('/home');
	}

	public function login(){

		return view('crud/login');
	}

	public function logon_user(Request $request){

		$email = $request->input('email');
		$password = sha1($request->input('password'));

     if (Auth::attempt(['email' => $email, 'password' => $password])) {
         // Authentication passed...
     		Session::flash('message','logged on successfully');

         return redirect('home');
     }
	}

	public function doLogout()
	{
	    Auth::logout(); // log the user out of our application
	    return Redirect::to('login'); // redirect the user to the login screen
	}
}
