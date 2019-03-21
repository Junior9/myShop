import { Injectable } from '@angular/core';
import {Product} from '../model/product';
import {HttpClient} from '@angular/common/http';
import {SessionService} from  '../service/session.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor(private http:HttpClient,
                private session:SessionService) { }

  URL = "http://localhost:3000/api/product/";
  productsShoppingCar : any = []; 

  create(product:Product){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'  
      })
    };
    return this.http.post<Product>(this.URL+'create', product,httpOptions);
  }

  delete(id){}
  update(product:Product){}
  get(id){
    return this.http.get(this.URL+id);
  }


  shoppingCarAdd(product:Product){
    var addProduct = true;

    if(this.productsShoppingCar === null){
      this.productsShoppingCar=[];
      this.productsShoppingCar.push(product);
    }else{
      this.productsShoppingCar.forEach(p => {
        if(p.id == product.id){
          addProduct = false;
        }
      })
      if(addProduct){
        this.productsShoppingCar.push(product);
      } 
    }
    this.session.addSession("shoppingList",this.productsShoppingCar);
  }

  shoppingCarRemove(product:Product){
    var index = -1;
    var newList: any =[];
    this.productsShoppingCar.forEach((p,index) => {
      if(p.id != product.id){
        newList.push(product);
      }
    })
    this.productsShoppingCar = newList;
    this.session.addSession("shoppingList",this.productsShoppingCar);
    return this.productsShoppingCar;
  }

  shoppingCarList(){
    this.productsShoppingCar = this.session.getSession("shoppingList");
    return this.productsShoppingCar;
  }

  refreshList(){
  	return this.http.get(this.URL+'list');
  }
}