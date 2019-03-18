import { Component, OnInit } from '@angular/core';
import {UserServiceService} from '../../service/user-service.service';
import {User} from '../../model/user';
import {Router} from "@angular/router"

import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user:User;

  constructor(private service:UserServiceService,private router: Router) { }

  ngOnInit() {
  	this.resetForm();
  }

  resetForm(){
  	this.service.user = {
	  		id : null,
	  		name :"",
	  		email:"",
	  		password:"",
	  		isAdm:true
  		}
  }

  login(userForm:NgForm){
  	var user = this.service.login(userForm.value);
  	if(user.id != ''){	
  		if(user.isAdm){
  			this.router.navigate(['/home/adm'])
  		}else{
  			this.router.navigate(['/home'])
  		}
  	}
  }

}
