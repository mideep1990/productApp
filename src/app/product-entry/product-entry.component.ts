import { Component, OnInit } from '@angular/core';
import {Product} from '../Product'
import {ProductEntryServiceService} from '../product-entry-service.service'

@Component({
  selector: 'app-product-entry',
  templateUrl: './product-entry.component.html',
  styleUrls: ['./product-entry.component.css']
})
export class ProductEntryComponent implements OnInit {

  product: any = new Product("",0,0);
  message:any;
  
  constructor(private service:ProductEntryServiceService) { }

  ngOnInit(): void {
  }

  public prodEntry(){
    let resp = this.service.doEntry(this.product);
    console.log("->>"+resp);
    resp.subscribe((data) => this.message=data);
  }



}
