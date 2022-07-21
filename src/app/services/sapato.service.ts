import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class SapatosService implements OnInit{

  constructor() { }

  ngOnInit(){
    return SAPATOS
  }
}

var SAPATOS = [
  {
    id: 1,
    name: "Tênis Nike Downshifter",
    price: 200,
    description: "Mesh respirável e macio que auxilia na ventilação interna. Entressola: oferece amortecimento em cada passada. Solado: borracha resistente.",
    seller: "Br-30",
    img: "./assets/image/spt1.jpg",
    like: false
  },
  {
    id: 2,
    name: "ADIDAS ADVANTAGE",
    price: 300,
    description: "Mesh respirável e macio que auxilia na ventilação interna. Entressola: oferece amortecimento em cada passada. Solado: borracha resistente.",
    seller: "Mg-48",
    img: "./assets/image/spt2.jpg",
    like: false
  },
  {
    id: 3,
    name: "ADIDAS SPRING",
    price: 540,
    description: "Mesh respirável e macio que auxilia na ventilação interna. Entressola: oferece amortecimento em cada passada. Solado: borracha resistente.",
    seller: "ba-94",
    img: "./assets/image/spt3.jpg",
    like: false
  },
  {
    id: 4,
    name: "FILA MDOX",
    price: 800,
    description: "Mesh respirável e macio que auxilia na ventilação interna. Entressola: oferece amortecimento em cada passada. Solado: borracha resistente.",
    seller: "meu pai",
    img: "./assets/image/spt4.jpg",
    like: false
  },
  {
    id: 5,
    name: "NIKE FUSION",
    price: 850,
    description: "Mesh respirável e macio que auxilia na ventilação interna. Entressola: oferece amortecimento em cada passada. Solado: borracha resistente.",
    seller: "meu irmão",
    img: "./assets/image/spt5.jpg",
    like: false
  },
  {
    id: 6,
    name: "ADIDAS TRACKER",
    price: 850,
    description: "Mesh respirável e macio que auxilia na ventilação interna. Entressola: oferece amortecimento em cada passada. Solado: borracha resistente.",
    seller: "meu irmão",
    img: "./assets/image/spt6.jpg",
    like: false
  }
]
