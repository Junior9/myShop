import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../../service/product-service.service';
import {ShoppingCarService} from '../../../service/shopping-car.service';
import {Product} from '../../../model/product'
import {SessionService} from '../../../service/session.service';
import {Router} from "@angular/router";
import {NavegationComponent} from '../../../component/navegation/navegation.component';

@Component({
	selector: 'app-tabla-product-adm',
	templateUrl: './tabla-product-adm.component.html',
	styleUrls: ['./tabla-product-adm.component.scss']
})
export class TablaProductAdmComponent implements OnInit {

	products: any = [];
	constructor(private productService:ProductService,
		private session:SessionService,
		private router: Router,
		private shppingCarService:ShoppingCarService) { }

	ngOnInit() {
		this.productService.refreshList().subscribe(
         res=> this.products = res,
         err=> console.error(err)
       );
	}

	delete(id){
		this.productService.delete(id);
		this.removeList(id);
	}

	removeList(id){
		var i=0;
		for(i=0; i < this.products.length; i++){
			if(this.products[i].id == id){
				this.products.splice(i,1);
			}
		}
	}
}