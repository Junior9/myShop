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
  total=0.0;
  data: any = [];

  ngOnInit() {
  	if(this.isBuy){
  		this.data = this.productService.shoppingCarList();
      this.sumTotal();
  	}else{
  		this.productService.refreshList().subscribe(
         res=> this.data = res,
         err=> console.error(err)
       );
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
    this.removeList(product.id);
  }

  delete(id){
    this.productService.delete(id);
    this.removeList(id);
  }

  removeList(id){
    var i=0;
    for(i=0; i < this.data.length; i++){
      if(this.data[i].id == id){
        this.data.splice(i,1);
      }
    }
  }

  sumTotal(){
    var i=0;
    for(i=0; i < this.data.length; i++){
       this.total += parseInt( this.data[i].price);
    }
  }

}