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
        console.log(product);
        this.productsShoppingCar.push(product);
      } 
    }
    this.session.addSession("shoppingList",this.productsShoppingCar);
  }

  shoppingCarRemove(product:Product){  
    this.productsShoppingCar;
    var index;

    for(index=0;index<this.productsShoppingCar.length;index++){
      if(product.id === this.productsShoppingCar[index].id){
        this.productsShoppingCar.splice(index,1);
        console.log(this.productsShoppingCar);
        //this.session.addSession("shoppingList",this.productsShoppingCar  );
        break;
      }
    }

  }

  shoppingCarList(){
    this.productsShoppingCar = this.session.getSession("shoppingList");
    return this.productsShoppingCar;
  }

  refreshList(){
  	return this.http.get(this.URL+'list');
  }
}