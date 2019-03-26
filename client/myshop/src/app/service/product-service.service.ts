import { Injectable } from '@angular/core';
import {Product} from '../model/product';
import {HttpClient} from '@angular/common/http';
import {SessionService} from  '../service/session.service';
import { HttpHeaders } from '@angular/common/http';
import {ShoppingCarService} from '../service/shopping-car.service';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor(private http:HttpClient,
                private session:SessionService,
                private shoppingCarService:ShoppingCarService) { }

  URL = "http://localhost:3000/api/product/";
  products : any = []; 

  create(product:Product){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'  
      })
    };
    console.log(product);
    return this.http.post<Product>(this.URL+'create', product,httpOptions);
  }

  delete(id){
    console.log(id);
    this.http.delete<Product>(this.URL+'delete/'+id).subscribe(
      (response)=>{
        console.log(response)
      },
      (err)=>{
        console.log(err)
      }
    );
  }

  update(product:Product){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'  
      })
    };
    return this.http.put<Product>(this.URL+'update/'+product.id, product,httpOptions);
  }

  get(id){
    return this.http.get(this.URL+id);
  }

  refreshList(){
  	return this.http.get(this.URL+'list');
  }
}