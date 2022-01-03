import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContatosListaRoutingModule } from './contatos-lista-routing.module';
import { ContatosListaComponent } from '../../components/contatos-lista/contatos-lista.component';
import { HttpClientModule } from '@angular/common/http';
import { ContatoService } from 'src/app/services/contato.service';

@NgModule({
  declarations: [
    ContatosListaComponent
  ],
  imports: [
    CommonModule,
    ContatosListaRoutingModule,
    HttpClientModule
  ],
  providers: [
    ContatoService
  ]
})
export class ContatosListaModule { }
