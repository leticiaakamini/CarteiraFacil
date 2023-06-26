import { Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { Router } from '@angular/router';
import { CadastroService } from '../cadastro/services/cadastro.service';
import { Cadastro } from '../cadastro/model/cadastro';
import { GastoReceita } from '../gastos-receitas/model/gasto-receita';
import { Desejo } from '../gastos-receitas/model/desejo';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly API = 'api/usuario';

  usuarioAutenticado: boolean;

  constructor(
    private httpClient: HttpClient
  ) { 
    this.usuarioAutenticado = false;
  }

  fazerLogin(usuarioLogin: Usuario){
    return this.httpClient.post<Usuario>(this.API, usuarioLogin);
  }

  // fazerLogin(usuarioLogin: Usuario){
  //   let verificacao = this.httpClient.post<Usuario>(this.API, usuarioLogin);
  //   return verificacao
  // }

  usuarioEstaAutenticado(){
    return this.usuarioAutenticado;
  }
}
