import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './template/footer/footer.component';
import { HeaderComponent } from './template/header/header.component';
import { ProductComponent } from './component/product/product.component';
import { ProductListComponent } from './component/product-list/product-list.component';
import { HomeComponent } from './page/home/home.component';
import { HomeAdmComponent } from './page/home-adm/home-adm.component';
import { LoginComponent } from './page/login/login.component';
import { ProductAdmComponent } from './component/adm/product-adm/product-adm.component';
import { UserComponent } from './component/user/user.component';
import { PageNotFoundComponent } from './page/page-not-found/page-not-found.component';
import { NavegationComponent } from './component/navegation/navegation.component';
import { BannerComponent } from './component/banner/banner.component';
import { HttpClientModule} from '@angular/common/http';
import { ProductTableComponent } from './component/product-table/product-table.component';
import { BuyValidateComponent } from './page/buy-validate/buy-validate.component';
import { BuyPayComponent } from './page/buy-pay/buy-pay.component';
import { OrderModule } from 'ngx-order-pipe';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { TablaProductAdmComponent } from './component/adm/tabla-product-adm/tabla-product-adm.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ProductComponent,
    ProductListComponent,
    HomeComponent,
    HomeAdmComponent,
    LoginComponent,
    ProductAdmComponent,
    UserComponent,
    PageNotFoundComponent,
    NavegationComponent,
    BannerComponent,
    ProductTableComponent,
    BuyValidateComponent,
    BuyPayComponent,
    TablaProductAdmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    OrderModule,
    FilterPipeModule,
    HttpClientModule     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
