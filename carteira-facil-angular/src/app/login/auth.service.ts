import { Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly API = 'http://192.168.1.5:8080/api/usuario';

  usuarioAutenticado: boolean;

  constructor(
    private httpClient: HttpClient
  ) { 
    this.usuarioAutenticado = false;
  }

  fazerLogin(usuarioLogin: Usuario){
    // let httpRequest = new XMLHttpRequest();
    // httpRequest.open("POST", 'http://localhost:8080/api/usuario');
    return this.httpClient.post<Usuario>(this.API, usuarioLogin);
  }

  usuarioEstaAutenticado(){
    return this.usuarioAutenticado;
  }
}
