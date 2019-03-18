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
      id:'1',
      name:"MotoG7",
      img:"https://http2.mlstatic.com/moto-g7-plus-D_NQ_NP_929867-MLM29559103847_032019-O.webp",
      description:"El mejor celular del Motorola"
    },
    {
      id:'1',
      name:"MotoG7",
      img:"https://http2.mlstatic.com/moto-g7-plus-D_NQ_NP_929867-MLM29559103847_032019-O.webp",
      description:"El mejor celular del Motorola"
    },
    {
      id:'1',
      name:"MotoG7",
      img:"https://http2.mlstatic.com/moto-g7-plus-D_NQ_NP_929867-MLM29559103847_032019-O.webp",
      description:"El mejor celular del Motorola"
    },
    {
      id:'1',
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
    this.productsShoppingCar.push(product);
  }

  shoppingCarRemove(product:Product){
    
  }

  shoppingCarList(){
    return this.productsShoppingCar;

    /*
    return [{
      id:'1',
      name:"MotoG7",
      img:"https://http2.mlstatic.com/moto-g7-plus-D_NQ_NP_929867-MLM29559103847_032019-O.webp",
      description:"El mejor celular del Motorola"
    },
    {
      id:'1',
      name:"MotoG7",
      img:"https://http2.mlstatic.com/moto-g7-plus-D_NQ_NP_929867-MLM29559103847_032019-O.webp",
      description:"El mejor celular del Motorola"
    }
    ];
    */
  }

  refreshList(){
  	//return this.http.get(this.URL+'product');
    return this.data;
  }
}
