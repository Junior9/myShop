import { Component, OnInit } from '@angular/core';
import {Product} from '../../../model/product';
import {NgForm} from '@angular/forms';
import {ProductService} from '../../../service/product-service.service';
import { ActivatedRoute } from "@angular/router";
import {Router} from "@angular/router";

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

  action = "";

  constructor(private productService:ProductService,
                private route: ActivatedRoute,
                private router: Router) { }

  ngOnInit() {
    if(this.route.snapshot.paramMap.get("id")){
      var id = this.route.snapshot.paramMap.get("id");
      this.productService.get(id).subscribe(
         (response)=>{
           this.product = response[0];
           this.action = "Edit";
         },
         (err)=>{
           console.log(err)
         }
       );
    }else{

      this.action = "Add";
    }
  }

  onSubmit(register:NgForm){
      if(register.value.id == "" || register.value.id == null){
        delete register.value.id;
        this.productService.create(register.value).subscribe((response)=>{
          this.router.navigate(['/home/adm'])
        },(error)=>{
          console.log('error during post is ', error)
        });
        this.resetForm(null);
      }else{
        this.productService.update(register.value).subscribe((response)=>{
          this.router.navigate(['/home/adm'])
        },(error)=>{
          console.log('error during post is ', error)
        });
      }
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

}