import { Injectable } from '@angular/core';
import {User} from '../model/user';
import {SessionService} from '../service/session.service';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  URL = "http://localhost:3000/api/";

  constructor(private session:SessionService,
                private http:HttpClient) { }
  
  user: User = {
  id : '1',
	name :"",
	email:"",
	password:"",
	isAdm:false
  };
  
  login(user:User){
  	user = this.get(user);
  	if(user.id != ''){
  		this.session.startSession(user);
  	}
  	return user;
  }

  create(user:User){
  	this.session.startSession(user);
    this.http.post(this.URL+'user/create',user);
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