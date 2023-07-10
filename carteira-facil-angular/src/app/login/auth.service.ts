import { Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { HttpClient } from '@angular/common/http';
import { HttpService } from '../shared/service/http.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly API = 'http://ec2-15-228-254-200.sa-east-1.compute.amazonaws.com:8080/api/usuario';

  usuarioAutenticado: boolean;

  constructor(
    private httpClient: HttpClient
  ) { 
    this.usuarioAutenticado = false;
  }

  fazerLogin(usuarioLogin: Usuario){
    return this.httpClient.post<Usuario>(this.API, usuarioLogin);
  }

  usuarioEstaAutenticado(){
    return this.usuarioAutenticado;
  }
}
