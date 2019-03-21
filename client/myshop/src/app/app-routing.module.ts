import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './page/home/home.component';
import {HomeAdmComponent} from './page/home-adm/home-adm.component';
import {PageNotFoundComponent} from './page/page-not-found/page-not-found.component';
import {LoginComponent} from './page/login/login.component';
import {ProductComponent} from './component/product/product.component';
import {UserComponent} from './component/user/user.component';
import {ProductAdmComponent} from './component/adm/product-adm/product-adm.component';
import {BuyValidateComponent} from './page/buy-validate/buy-validate.component';
import {BuyPayComponent} from './page/buy-pay/buy-pay.component';

const routes: Routes = [

	{path:'',component:HomeComponent},
	{path:'home',component:HomeComponent},
	{path:'home/adm',component:HomeAdmComponent},
	{path:'login',component:LoginComponent},
	{path:'product/create',component:ProductAdmComponent},
	{path:'product/:id',component:ProductComponent},
	{path:'register',component:UserComponent},
	{path:'buy/validate',component:BuyValidateComponent},
	{path:'buy/pay',component:BuyPayComponent},
	

	{path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }