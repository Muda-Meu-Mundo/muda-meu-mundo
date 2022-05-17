import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from '../components/modal/modal.component';

@Component({
  selector: 'app-frutas',
  templateUrl: './frutas.page.html',
  styleUrls: ['./frutas.page.scss'],
})
export class FrutasPage implements OnInit {


productList = [
  {"productName" : "Abacaxi"},
  {"productName" : "Acerola"},
  {"productName" : "Caju"},
  {"productName" : "Laranja"},
  {"productName" : "Maça"},
  {"productName" : "Mamão"},
  {"productName" : "Melão"},
  {"productName" : "Pêra"},
  {"productName" : "Pitomba"},
  {"productName" : "Uva"}
  
];


  constructor(private modalCtrl:ModalController) { }

  ngOnInit() {
  }
 
  async _openModal() {
    const modal = await this.modalCtrl.create({ 
      component:ModalComponent, 
       })

     return await modal.present();
  }





}
