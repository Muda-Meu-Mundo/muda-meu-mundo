import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-raizes',
  templateUrl: './raizes.page.html',
  styleUrls: ['./raizes.page.scss'],
})
export class RaizesPage implements OnInit {
  productList = [
   
    {"productName" : "Batata"},
    {"productName" : "Batata-doce"},
    {"productName" : "Beterraba"},
    {"productName" : "Cenoura"},
    {"productName" : "Gengibre"},
    {"productName" : "Inhame"},
    {"productName" : "Mandioca"},
    {"productName" : "Rabanete"},
       
    ];
  constructor() { }

  ngOnInit() {
  }

}
