import { Injectable } from '@angular/core';
import {User} from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }

  getSession(key){
    return JSON.parse(localStorage.getItem(key));
  }

  addSession(key,value){
  	localStorage.setItem(key,JSON.stringify(value));
  }

  removeSession(key){
  	localStorage.removeItem(key);
  }

  startSession(user:User){
  	localStorage.setItem("user",JSON.stringify(user));
  	localStorage.removeItem("shoppingList");
  }

  cleanSession(){
  	localStorage.removeItem("user");
  	localStorage.removeItem("shoppingList");
  }
}
