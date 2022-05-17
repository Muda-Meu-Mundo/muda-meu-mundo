import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FrutasPageRoutingModule } from './frutas-routing.module';

import { FrutasPage } from './frutas.page';
import { ModalComponent } from '../components/modal/modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FrutasPageRoutingModule
  ],
  declarations: [
    FrutasPage,
    ModalComponent
  ]
})
export class FrutasPageModule {}
