import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  productList = [
    {"productName" : "Laranja"},
    {"productName" : "Mamão"},
    {"productName" : "Uva"},
    {"productName" : "Maça"},
    {"productName" : "Caju"},
    {"productName" : "Abacaxi"},
    {"productName" : "Acerola"},
    {"productName" : "Melão"},
    {"productName" : "Pêra"},
    {"productName" : "Pitomba"}
  
  ]

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  _dismiss(){
    console.log("dismiss")
    this.modalCtrl.dismiss(
          )
  }

}
