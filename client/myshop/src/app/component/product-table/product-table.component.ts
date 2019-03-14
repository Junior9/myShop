import { Component, OnInit, Input } from '@angular/core';
import {ProductService} from '../../service/product-service.service';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.scss']
})
export class ProductTableComponent implements OnInit {

constructor(private productService:ProductService) { }

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
}