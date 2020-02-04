import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-productview',
  templateUrl: './productview.component.html',
  styleUrls: ['./productview.component.css']
})
export class ProductviewComponent implements OnInit {

  // constructor(private activatedroute:ActivatedRoute) { 
  //   console.log(this.activatedroute.snapshot);
    
  // }
productdetails;
  constructor(private http:HttpClient) { 
    this.http.get('https://5cdd0a92b22718001417c19d.mockapi.io/api/products')
    .subscribe((data)=> {this.productdetails=data});
    
  }

  ngOnInit() {
  }

}
