import { Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { Router } from '@angular/router';
import { CadastroService } from '../cadastro/services/cadastro.service';
import { Cadastro } from '../cadastro/model/cadastro';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  emailCadastrado: Cadastro;
  usuarioAutenticado: boolean;
  usuariosCadastrados: Cadastro[] = [];


  constructor(
    private router: Router,
    private cadastroService: CadastroService
  ) { 
    this.cadastroService.listar().subscribe(resposta => 
      this.usuariosCadastrados = resposta
    )

    this.usuarioAutenticado = false;
  }

  fazerLogin(usuarioLogin: Usuario){

    this.usuariosCadastrados.find(usuario => {
      if (usuarioLogin.email == usuario.email && usuarioLogin.senha == usuario.senha) {

        this.usuarioAutenticado = true;
        this.router.navigate(['/principal']);
      }
    })

    if (!this.usuarioAutenticado) {
      this.emailCadastrado = this.usuariosCadastrados.find(usuario => usuarioLogin.email == usuario.email && usuarioLogin.senha !== usuario.senha);
    }
  }

  usuarioEstaAutenticado(){
    return this.usuarioAutenticado;
  }
}
