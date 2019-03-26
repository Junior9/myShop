import { Component, OnInit } from '@angular/core';
import {SessionService} from '../../service/session.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private session:SessionService,private router: Router) { }
  user = {
    name:''
  }
  isLogged = false;

  ngOnInit() {
  	if(this.session.getSession("user") === null){
      this.isLogged = false;
  	}else{
      var user = this.session.getSession("user");
      this.user["name"] = user["name"];
      this.isLogged = true;
    }
  }
  
  logoff(){
  	this.session.cleanSession();
  	window.location.reload();
  }
}