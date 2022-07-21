import { Component, OnInit } from '@angular/core';
import { Sapato } from 'src/app/Models/sapato.model';
import { SapatosService } from 'src/app/services/sapato.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {
  sapatos: Sapato[]


  constructor(private sapatosService: SapatosService) {
    this.sapatos = this.sapatosService.ngOnInit()
  }

  ngOnInit() {
  }

}
