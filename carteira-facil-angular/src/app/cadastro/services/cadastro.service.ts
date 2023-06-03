import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cadastro } from '../model/cadastro';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  private readonly API = 'api/cadastro';

  constructor(private httpClient: HttpClient) { }

  adicionar(cadastro: Cadastro){
    return this.httpClient.post<Cadastro>(this.API, cadastro);
  }
}
