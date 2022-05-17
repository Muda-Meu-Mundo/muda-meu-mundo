import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-legumes',
  templateUrl: './legumes.page.html',
  styleUrls: ['./legumes.page.scss'],
})
export class LegumesPage implements OnInit {
  productList = [
    {"productName" : "Abóbora"},
    {"productName" : "Berinjela"},
    {"productName" : "Cenoura"},
    {"productName" : "Chuchu"},
    {"productName" : "Ervilha"},
    {"productName" : "Pepino"},
    {"productName" : "Pimentão"},
    {"productName" : "Tomate"},
    ];
  constructor() { }

  ngOnInit() {
  }

}
