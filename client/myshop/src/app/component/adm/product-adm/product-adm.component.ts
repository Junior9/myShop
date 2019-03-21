import { Component, OnInit } from '@angular/core';
import {Product} from '../../../model/product';
import {NgForm} from '@angular/forms';
import {ProductService} from '../../../service/product-service.service';


@Component({
  selector: 'app-product-adm',
  templateUrl: './product-adm.component.html',
  styleUrls: ['./product-adm.component.scss']
})
export class ProductAdmComponent implements OnInit {

	product:Product = {
		id:'',
		name:'',
		description:'',
		price:0,
		img:''
	}

  constructor(private produtoService:ProductService) { }

  ngOnInit() {


  }

  resetForm(form?:NgForm){
  	if(form != null){

  	}else{
  		this.product = {
  		id:'',
		name:'',
		description:'',
		price:0,
		img:''
		}	
  	}
  }

onSubmit(register:NgForm){
    if(register.value.id == "" || register.value.id == null){
      var result = this.produtoService.create(register.value).subscribe((response)=>{
        console.log('response from post data is ', response);
      },(error)=>{
        console.log('error during post is ', error)
      });
      console.log(result);
      this.resetForm(null);
    }
  }

}
