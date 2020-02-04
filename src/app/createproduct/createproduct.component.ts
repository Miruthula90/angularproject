import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-createproduct',
  templateUrl: './createproduct.component.html',
  styleUrls: ['./createproduct.component.css']
})
export class CreateproductComponent implements OnInit {
  userform:FormGroup;
  constructor() {
    this.userform=new FormGroup(

    {
      'name':new FormControl(),
        'age':new FormControl(),
        'email':new FormControl(),
        'country':new FormControl(),
        'state':new FormControl(),
        'city':new FormControl()
      
    }
  ) }

  ngOnInit() {
  }


  SubmitForm()
  {
    console.log(this.userform.value);
  }
}
