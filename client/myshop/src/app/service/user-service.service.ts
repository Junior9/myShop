import { Injectable } from '@angular/core';
import {User} from '../model/user';
import {HttpClient} from '@angular/common/http';
import {SessionService} from '../service/session.service';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  URL = "http://localhost:3000/api/user/";

  constructor(private http:HttpClient,
                private session:SessionService) { }
  
  user: User = {
  id : '1',
	name :"",
	email:"",
	password:"",
	isAdm:false
  };
  
  login(user:User){
  	return this.http.post(this.URL+'login',user);
  }

  create(user:User){
  	//this.session.startSession(user);
    return this.http.post(this.URL+'create',user);
  }

  logoff(){
  	this.session.cleanSession();
  }

  get(user:User){
  	user.id = "1";
  	user.name = "Francisco";
  	user.email = "email";
  	user.password = "123";
  	user.isAdm = false;
  	return user;
  }
}