import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MessageService } from '../message.service';
@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.css']
})
export class AllproductsComponent implements OnInit {
  public value;
  public products=[];
  public brand;
  public id;
  public details=[];
  message:string= '';
  searchText;
  constructor(private http:HttpClient,private messageService: MessageService) { }


  ngOnInit() {
    this.getAllProducts();
  }
  getAllProducts(){
    this.http.get('http://backend-app-codebrewers.inmbzp8022.in.dst.ibm.com/api/getproducts/').subscribe((response:any[])=>
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
