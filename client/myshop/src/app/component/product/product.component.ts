import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../service/product-service.service';
import {Product} from '../../model/product';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(private productService:ProductService,
  				private route: ActivatedRoute) { }

  product:Product;

  ngOnInit() {
  	 var id = this.route.snapshot.paramMap.get("id");
  	 this.productService.get(id).subscribe(
  	 	(response)=>{
  	 		this.product = response[0];
  	 	},
  	 	(err)=>{
  	 		console.log(err)
  	 	}
  	 );
  }

  addShoppingCar(product:Product){
    this.productService.shoppingCarAdd(product);
  }
}