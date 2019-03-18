import { Component, OnInit } from '@angular/core';
import {UserServiceService} from '../../service/user-service.service';
import {User} from '../../model/user';
import {NgForm} from '@angular/forms';
import {Router} from "@angular/router"

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private service:UserServiceService,private router: Router) { }

  ngOnInit() {
  }

  resetForm(){
  	this.service.user = {
	  		id : null,
	  		name :"",
	  		email:"",
	  		password:"",
	  		isAdm:false
  		}
  }

  register(userForm:NgForm){
  	var user = this.service.create(userForm.value);
  	console.log(user);

  	if(user.id === ''){	
  		this.router.navigate(['/register'])		
  	}else{
  		this.router.navigate(['/home'])	
  	}
  }
}
