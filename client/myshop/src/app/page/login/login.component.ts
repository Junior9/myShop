import { Component, OnInit } from '@angular/core';
import {UserServiceService} from '../../service/user-service.service';
import {User} from '../../model/user';
import {Router} from "@angular/router"
import {SessionService} from '../../service/session.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user:User;

  constructor(private service:UserServiceService,
                private router: Router,
                private session:SessionService,) { }

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
  	this.service.login(userForm.value).subscribe(
      (response)=>{
         if(response["status"]){
           var user = response["user"];
           this.session.startSession(user);
           if(user["isAdm"]){
             this.router.navigate(['/home/adm'])
           }else{
             this.router.navigate(['/home'])
           }
         }
      },
      (err)=>{
        console.log(err)
      }
    );
  }
}