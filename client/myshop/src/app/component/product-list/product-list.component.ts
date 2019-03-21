import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../service/product-service.service';
import {Product} from '../../model/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  constructor(private productService:ProductService) { }

   data: any = [];

  ngOnInit() {
  	this.productService.refreshList().subscribe(
         res=> this.data = res,
         err=> console.error(err)
       );
    
  }

  addShoppingCar(product:Product){
    this.productService.shoppingCarAdd(product);
  }

  delete(id:string){
    this.productService.delete(id);
  }

  updateForm(product:Product){
    this.productService.update(product);
  }
}