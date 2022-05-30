import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.page.html',
  styleUrls: ['./editar.page.scss'],
})
export class EditarPage implements OnInit {

  productList = [
    {"product" :"Frutas"},
    {"product" :"Grãos"},
    {"product" :"Legumes"}, 
    {"product" :"Raízes"},
    {"product" :"Verduras" }
  ]

  constructor() { }

  ngOnInit() {
  }

}
