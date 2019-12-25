import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {
  constructor(private messageService: MessageService) {

   }

  ngOnInit() {
  }
  public myfunction(message : string){
    this.messageService.setOption(message);
}
}
