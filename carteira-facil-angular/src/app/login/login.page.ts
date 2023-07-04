import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Usuario } from './usuario';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage implements OnInit {

  private usuario: Usuario = new Usuario();
  form: UntypedFormGroup;
  

  constructor(private formBuilder: UntypedFormBuilder,
    private service: AuthService,
    private router: Router,
    private alerta: AlertController,
  ) { }

  ngOnInit() { 
    this.form = this.formBuilder.group({
      id: [null],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]]
    });
  }

  fazerLogin() {
    this.service.fazerLogin(this.usuario).subscribe(
      () => this.navegar('/home'),
      () => this.mostrarAlertaErro()
    )
  }

  navegar(pagina: string) {
    this.router.navigate([pagina]);
  }

  async mostrarAlertaErro() {
    const alert = await this.alerta.create({
      message: 'Email ou senha incorretos! Se você não possui uma conta, é necessário se cadastrar.',
      buttons: ['OK']
    })
    await alert.present();
  }
}
