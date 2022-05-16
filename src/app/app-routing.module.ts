import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
      path: '',
      redirectTo: '/login',
      pathMatch: 'full'
  },

  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },

  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },

  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'frutas',
    loadChildren: () => import('./produtos/frutas/frutas.module').then( m => m.FrutasPageModule)
  },
  {
    path: 'verduras',
    loadChildren: () => import('./produtos/verduras/verduras.module').then( m => m.VerdurasPageModule)
  },
  {
    path: 'legumes',
    loadChildren: () => import('./produtos/legumes/legumes.module').then( m => m.LegumesPageModule)
  },
  {
    path: 'graos',
    loadChildren: () => import('./produtos/graos/graos.module').then( m => m.GraosPageModule)
  },
  {
    path: 'raizes',
    loadChildren: () => import('./produtos/raizes/raizes.module').then( m => m.RaizesPageModule)
  },






];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
