import { Injectable } from '@angular/core';
import {Product} from '../model/product';
import {SessionService} from  '../service/session.service';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCarService {

  products : any = []; 

  constructor(private session:SessionService) { }

   shoppingCarAdd(product:Product){
    var addProduct = true;

    if(this.products === null){
      this.products=[];
      this.products.push(product);
      window.location.reload();
    }else{   

      this.products.forEach(p => {
        if(p.id == product.id){
          addProduct = false;
        }
      })

      if(addProduct){
        console.log(product)
        this.products.push(product);
      } 
    }
    this.session.addSession("shoppingList",this.products);
    return this.products;
  }

  shoppingCarRemove(product:Product){  
    this.products.splice(this.products.indexOf(product),1);
    this.session.addSession("shoppingList",this.products);
    return this.products;

  }

  shoppingCarList(){
    this.products = this.session.getSession("shoppingList");
    return this.products;
  }

}
