import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graos',
  templateUrl: './graos.page.html',
  styleUrls: ['./graos.page.scss'],
})
export class GraosPage implements OnInit {
  productList = [
    {"productName" : "Amendoim"},
    {"productName" : "Arroz"},
    {"productName" : "Aveia"},
    {"productName" : "Feijão"},
    {"productName" : "Milho"},
    {"productName" : "Lentilha"},
    {"productName" : "Soja"},  
    {"productName" : "Trigo"},
    
    ];
  constructor() { }

  ngOnInit() {
  }

}
