import { Component, Input, OnInit } from '@angular/core';
import { Sapato } from 'src/app/Models/sapato.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input()
  sapato: any
  

  constructor() { 
  
  }
  
  ngOnInit(): void {
  }

  like(id: number){
    if(this.sapato[id - 1].like == true){
      this.sapato[id - 1].like = false
    } else {
      this.sapato[id - 1].like = true
    }
  }
}
