import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  
  constructor() { 


  }

  ngOnInit() {
  }
@Input() productid;
@Input() productno;
@Input() productname;
@Input() price;

  products=[
 
  {productid:'1',productno:'AR-531',productname:'P-1',price:'1000'},
  {productid:'2',productno:'GF-231',productname:'P-2',price:'2000'},
  {productid:'3',productno:'JK-341',productname:'P-3',price:'3000'},
  {productid:'4',productno:'SD-324',productname:'P-4',price:'4000'},
  {productid:'5',productno:'WE-329',productname:'P-5',price:'5000'},
  {productid:'6',productno:'JK-890',productname:'P-6',price:'6000'}
 
  
  ]
}
