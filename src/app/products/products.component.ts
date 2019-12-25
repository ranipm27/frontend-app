import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MessageService } from '../message.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public value;
  public products=[];
  public details=[];
  public id;
  public brand;
  message:string= '';
  searchText;
  constructor(private http:HttpClient,private messageService: MessageService) { }

  ngOnInit() {
  //  this.getAllProducts()
    this.getProductsByBrands()
    
  }
  getAllProducts(){
    this.http.get('http://backend-app-codebrewers.inmbzp8022.in.dst.ibm.com/api/getproducts/').subscribe((response:any[])=>
  {
    this.products=response
 console.log(this.products)
   

  })
  }
  getProductsByBrands(){
   this.value= this.messageService.getOption();
   this.brand=this.value
   console.log(this.brand)
  
   
   this.http.get('http://backend-app-codebrewers.inmbzp8022.in.dst.ibm.com/api/getproducts/desc/'+this.brand).subscribe((response:any[])=>
  {
    this.products=response
 console.log(this.products)

  })
  }
view(message:string){
  this.id=message
  this.http.get('http://backend-app-codebrewers.inmbzp8022.in.dst.ibm.com/api/getproducts/id/'+this.id).subscribe((response:any[])=>
  {
    this.details=response
 console.log(this.details)

  })
}
}
