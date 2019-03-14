import { Component, OnInit  } from '@angular/core';
import {ProductService} from '../../service/product-service.service';

@Component({
  selector: 'app-home-adm',
  templateUrl: './home-adm.component.html',
  styleUrls: ['./home-adm.component.scss']
})
export class HomeAdmComponent implements OnInit {

  

  constructor(private productService:ProductService) { }

  data: any = [];
  ngOnInit() {
  }

}
