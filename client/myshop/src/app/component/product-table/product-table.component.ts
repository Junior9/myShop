import { Component, OnInit, Input } from '@angular/core';
import {ProductService} from '../../service/product-service.service';
import {Product} from '../../model/product'
import {SessionService} from '../../service/session.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.scss']
})
export class ProductTableComponent implements OnInit {

constructor(private productService:ProductService,
              private session:SessionService,
              private router: Router) { }

  @Input()
  isBuy: boolean;

  data: any = [];

  ngOnInit() {
  	if(this.isBuy){
  		this.data = this.productService.shoppingCarList();
  	}else{
  		this.data = this.productService.refreshList();
  	}
  }

  buy(){
    if(this.session.isLoggedSession()){
      this.router.navigate(['/buy/pay'])
    }else{
      this.router.navigate(['/login'])
    }
  }

  removeProductShoppingCar(product:Product){
    this.data = this.productService.shoppingCarRemove(product);
  }
}