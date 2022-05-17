import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from '../components/modal/modal.component';

@Component({
  selector: 'app-frutas',
  templateUrl: './frutas.page.html',
  styleUrls: ['./frutas.page.scss'],
})
export class FrutasPage implements OnInit {

  constructor(private modalCtrl:ModalController) { }

  ngOnInit() {
  }
 
  async _openModal() {
    const modal = await this.modalCtrl.create({ 
      component:ModalComponent, 
      componentProps:{
        "name":"malu",
        "type": "linda"
      } })

     return await modal.present();
  }
}
