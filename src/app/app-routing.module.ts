import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'confirme/:paramNome/:paramCurso/:paramRm',
    loadChildren: () => import('./pages/confirme/confirme.module').then( m => m.ConfirmePageModule)
  },
  {
    path: 'endpage/:paramNome/:paramCurso/:paramRm',
    loadChildren: () => import('./pages/endpage/endpage.module').then( m => m.EndpagePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
