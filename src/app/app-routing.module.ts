import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import  {LoginComponent} from './login/login.component';
import  {HolderComponent} from './holder/holder.component';
import  {ProductsComponent} from './products/products.component';
import  {DashboardComponent} from './dashboard/dashboard.component';
import {CreateproductComponent} from './createproduct/createproduct.component';
import { ProductviewComponent } from './productview/productview.component';


const routes: Routes = [
  {
    path:'',component:LoginComponent
  },
  {
    path:'holder',component:HolderComponent,
    children:[{
      path:'dashboard',component:DashboardComponent},
    { path:'products',component:ProductsComponent},
    {path:'createproduct',component:CreateproductComponent},
    {path:'productview',component:ProductviewComponent}
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
