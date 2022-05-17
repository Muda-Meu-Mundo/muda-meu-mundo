import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-verduras',
  templateUrl: './verduras.page.html',
  styleUrls: ['./verduras.page.scss'],
})
export class VerdurasPage implements OnInit {
  productList = [
    {"productName" : "Alface"},
    {"productName" : "Acelga"},
    {"productName" : "Brócolis"},
    {"productName" : "Coentro"},
    {"productName" : "Couve"},
    {"productName" : "Espinafre"},
    {"productName" : "Repolho"},
    {"productName" : "Rúcula"},
    ];
  constructor() { }

  ngOnInit() {
  }

}
