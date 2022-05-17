import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GraosPageRoutingModule } from './graos-routing.module';

import { GraosPage } from './graos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GraosPageRoutingModule
  ],
  declarations: [GraosPage]
})
export class GraosPageModule {}
