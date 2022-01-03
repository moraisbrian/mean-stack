import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ContatoService {

  constructor(private http: HttpClient) { }

  public obterContatos(): Observable<any> {
    return this.http.get('http://localhost:3000/api/v1/contatos');
  }
}
