import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RaizesPage } from './raizes.page';

const routes: Routes = [
  {
    path: '',
    component: RaizesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RaizesPageRoutingModule {}
