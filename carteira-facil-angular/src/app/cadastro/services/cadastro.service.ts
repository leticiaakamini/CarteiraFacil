import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cadastro } from '../model/cadastro';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  private readonly API = 'http://ec2-15-228-254-200.sa-east-1.compute.amazonaws.com:8080/api/usuario';

  constructor(private httpClient: HttpClient) { }

  adicionar(cadastro: Cadastro){
    return this.httpClient.post<Cadastro>(`${this.API}/cadastro`, cadastro);
  }

  listar(){
    return this.httpClient.get<Cadastro[]>(this.API);
  }

  buscarPorId(){
    return this.httpClient.get<Cadastro>(`${this.API}/alterar-dados`);
  }

  atualizar(cadastro: Cadastro){
    return this.httpClient.put<Cadastro>(this.API, cadastro);
  }
}
