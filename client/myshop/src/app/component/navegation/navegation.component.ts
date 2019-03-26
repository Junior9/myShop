import { Component, OnInit } from '@angular/core';
import {ShoppingCarService} from '../../service/shopping-car.service';
import {Product} from '../../model/product';

@Component({
  selector: 'app-navegation',
  templateUrl: './navegation.component.html',
  styleUrls: ['./navegation.component.scss']
})
export class NavegationComponent implements OnInit {

  constructor(private service:ShoppingCarService) { }

  data: any = [];
  ngOnInit() {
  	 this.refleshShoppingCar();
  }

  removeProductShoppingCar(product:Product){
  	this.data = this.service.shoppingCarRemove(product);
  }

  refleshShoppingCar(){
    this.data = this.service.shoppingCarList();
  }
}