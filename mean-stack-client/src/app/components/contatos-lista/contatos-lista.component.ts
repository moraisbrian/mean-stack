import { Component, OnInit } from '@angular/core';
import { ContatoService } from 'src/app/services/contato.service';

@Component({
  selector: 'app-contatos-lista',
  templateUrl: './contatos-lista.component.html',
  styleUrls: ['./contatos-lista.component.css']
})
export class ContatosListaComponent implements OnInit {

  constructor(private contatoService: ContatoService) { }

  ngOnInit(): void {
    this.contatoService.obterContatos()
      .subscribe((result: any) => console.log(result));
  }

}
