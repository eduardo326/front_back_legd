<?php

namespace App\Entities;

class ResponseApi{

	public $success=true;
	public $message;
	public $data=[];
	public $errors=[];

	// Constructor
    public function __construct(){}

}