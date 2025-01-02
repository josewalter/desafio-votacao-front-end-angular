import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Sessao } from '../modelo/Sessao';

@Injectable({
  providedIn: 'root'
})

export class SessaoService {
  private url:string = 'http://localhost:8080/sessoes';

  constructor(private http:HttpClient) {

  }

  selecionar(): Observable<Sessao[]> {
    return this.http.get<Sessao[]>(this.url);
  }

  cadastrar(obj:Sessao):Observable<Sessao>{
     return this.http.post<Sessao>(this.url, obj);
  }
}

