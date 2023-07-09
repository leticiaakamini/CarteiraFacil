import { Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { HttpClient } from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';
import { HttpService } from '../shared/service/http.service';
import { Observable } from 'rxjs-compat';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly API = 'http://192.168.1.9:8080/api/usuario';

  usuarioAutenticado: boolean;

  constructor(
    private httpClient: HttpClient,
    private http: HttpService
  ) { 
    this.usuarioAutenticado = false;
  }

  fazerLogin(usuarioLogin: Usuario){
    return this.httpClient.post<Usuario>(this.API, usuarioLogin);
  }

  // async fazerLogin(usuarioLogin: Usuario){
  //   const result = await this.http.post<Usuario>(this.API, usuarioLogin);
  //   return result;
  // }

  usuarioEstaAutenticado(){
    return this.usuarioAutenticado;
  }
}
