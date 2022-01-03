import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./modules/home/home.module').then(module => module.HomeModule) },
  { path: 'contatos', loadChildren: () => import('./modules/contatos-lista/contatos-lista.module').then(module => module.ContatosListaModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
