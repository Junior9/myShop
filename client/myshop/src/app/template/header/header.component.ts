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

  isLogged = true;

  ngOnInit() {
  	if(this.session.getSession("user") === null){
  		this.isLogged = false;
  	}
  }
  
  logoff(){
  	this.session.cleanSession();
  	this.router.navigate(['/home'])
  }

}
