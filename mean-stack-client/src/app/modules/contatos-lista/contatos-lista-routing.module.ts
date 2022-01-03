import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatosListaComponent } from 'src/app/components/contatos-lista/contatos-lista.component';

const routes: Routes = [
  { path: '', component: ContatosListaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContatosListaRoutingModule { }
