import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Usuario } from './usuario';
import { FormBuilder, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage implements OnInit {

  private usuario: Usuario = new Usuario();

  form = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    senha: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]]
  });

  constructor(private formBuilder: FormBuilder,
    private service: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(){}

  fazerLogin(){
    this.service.fazerLogin(this.usuario);
    this.router.navigate(['principal']);

    console.log(this.form.value);
    console.log(this.form.valid);
  }

}
