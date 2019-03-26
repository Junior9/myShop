import { Component, OnInit, Input } from '@angular/core';
import {ProductService} from '../../service/product-service.service';
import {ShoppingCarService} from '../../service/shopping-car.service';
import {Product} from '../../model/product'
import {SessionService} from '../../service/session.service';
import {Router} from "@angular/router";
import {NavegationComponent} from '../../component/navegation/navegation.component';


@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.scss']
})
export class ProductTableComponent implements OnInit {

constructor(private productService:ProductService,
              private session:SessionService,
              private router: Router,
              private shppingCarService:ShoppingCarService) { }
    

 @Input() navegation: NavegationComponent;

  total=0.0;
  data: any = [];

  ngOnInit() {
  	this.data = this.shppingCarService.shoppingCarList();
    this.sumTotal();
  }

  buy(){
    if(this.session.isLoggedSession()){
      this.router.navigate(['/buy/pay'])
    }else{
      this.router.navigate(['/login'])
    }
  }

  removeProductShoppingCar(product:Product){
    this.data = this.shppingCarService.shoppingCarRemove(product);
    this.removeList(product.id);
    window.location.reload();
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
    if(this.data != null){
      for(i=0; i < this.data.length; i++){
       this.total += parseInt( this.data[i].price);
      }
    }
    
  }

}