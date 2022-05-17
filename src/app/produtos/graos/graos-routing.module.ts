import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GraosPage } from './graos.page';

const routes: Routes = [
  {
    path: '',
    component: GraosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GraosPageRoutingModule {}
