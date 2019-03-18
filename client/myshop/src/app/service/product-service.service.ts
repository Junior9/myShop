import { Injectable } from '@angular/core';
import {Product} from '../model/product';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  URL = "http://";
  productsShoppingCar : any =[]; 

  data = [
    {
      id:'1',
      name:"MotoG7",
      img:"https://http2.mlstatic.com/moto-g7-plus-D_NQ_NP_929867-MLM29559103847_032019-O.webp",
      description:"El mejor celular del Motorola"
    },
    {
      id:'2',
      name:"MotoG7",
      img:"https://http2.mlstatic.com/moto-g7-plus-D_NQ_NP_929867-MLM29559103847_032019-O.webp",
      description:"El mejor celular del Motorola"
    },
    {
      id:'3',
      name:"MotoG7",
      img:"https://http2.mlstatic.com/moto-g7-plus-D_NQ_NP_929867-MLM29559103847_032019-O.webp",
      description:"El mejor celular del Motorola"
    },
    {
      id:'4',
      name:"MotoG7",
      img:"https://http2.mlstatic.com/moto-g7-plus-D_NQ_NP_929867-MLM29559103847_032019-O.webp",
      description:"El mejor celular del Motorola"
    },
    {
      id:'5',
      name:"MotoG7",
      img:"https://http2.mlstatic.com/moto-g7-plus-D_NQ_NP_929867-MLM29559103847_032019-O.webp",
      description:"El mejor celular del Motorola"
    }

  ];

  create(product:Product){
    //const result = this.http.post(this.URL+'create',product);
    //console.log(result);
    //return result;
  }

  delete(id){}
  update(product:Product){}
  get(id){
    return {
      id:'1',
      name:"MotoG7",
      img:"https://http2.mlstatic.com/moto-g7-plus-D_NQ_NP_929867-MLM29559103847_032019-O.webp",
      description:"El mejor celular del Motorola"
    };
  }


  shoppingCarAdd(product:Product){
    var addProduct = true;
    this.productsShoppingCar.forEach(p => {
      if(p.id == product.id){
        addProduct = false;
      }
    })

    if(addProduct){
      this.productsShoppingCar.push(product);
    } 
    localStorage.setItem("shoppingList",JSON.stringify( this.productsShoppingCar));
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
    localStorage.setItem("shoppingList",JSON.stringify( this.productsShoppingCar));
    return this.productsShoppingCar;
  }

  shoppingCarList(){
    this.productsShoppingCar = JSON.parse(localStorage.getItem("shoppingList"));
    return this.productsShoppingCar;
  }

  refreshList(){
  	//return this.http.get(this.URL+'product');
    return this.data;
  }
}