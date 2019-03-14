import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../service/product-service.service';
import {Product} from '../../model/product';

@Component({
  selector: 'app-navegation',
  templateUrl: './navegation.component.html',
  styleUrls: ['./navegation.component.scss']
})
export class NavegationComponent implements OnInit {

  constructor(private productService:ProductService) { }

  data: any = [];
  ngOnInit() {
  	 this.data = this.productService.shoppingCarList();
  }

}
