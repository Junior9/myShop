import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../service/product-service.service';
import {Product} from '../../model/product';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(private productService:ProductService) { }

  product:Product;

  ngOnInit() {
  	this.product = this.productService.get(1);
  }




}
