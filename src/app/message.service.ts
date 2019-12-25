import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
@Injectable({
  providedIn: 'root'
})
export class MessageService {
 
  constructor() { }
  private data = {};  
  
  setOption(value) {  
    this.data= value;  
  }  
  
  getOption() {  
    return this.data;  
  }  

  
}
