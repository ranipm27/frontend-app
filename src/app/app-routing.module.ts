import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { BrandsComponent } from './brands/brands.component';
import { AllproductsComponent } from './allproducts/allproducts.component';


const routes: Routes = [
  {path:"", redirectTo:"/home",pathMatch:"full" },
   {path:"home", component:HomeComponent },
   {path:"products", component:ProductsComponent },
   {path:"allproducts", component:AllproductsComponent },
   {path:"brands", component:BrandsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
