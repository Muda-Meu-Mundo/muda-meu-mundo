import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RaizesPageRoutingModule } from './raizes-routing.module';

import { RaizesPage } from './raizes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RaizesPageRoutingModule
  ],
  declarations: [RaizesPage]
})
export class RaizesPageModule {}
