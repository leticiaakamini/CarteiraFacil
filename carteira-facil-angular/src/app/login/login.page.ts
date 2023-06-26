import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Usuario } from './usuario';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage implements OnInit {

  private usuario: Usuario = new Usuario();

  form = this.formBuilder.group({
    id: [null],
    email: ['', [Validators.required, Validators.email]],
    senha: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]]
  });

  constructor(private formBuilder: FormBuilder,
    private service: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private alerta: AlertController,
  ) { }

  ngOnInit() { }

  fazerLogin() {
    this.service.fazerLogin(this.usuario).subscribe(
      () => this.router.navigate(['/principal']),
      () => this.mostrarAlertaErro()
    )
  }

  async mostrarAlertaErro() {
    const alert = await this.alerta.create({
      message: 'Email ou senha incorretos! Se você não possui uma conta, é necessário se cadastrar.',
      buttons: ['OK']
    })
    await alert.present();
  }

  // async mostrarAlertaSenha(){
  //   const alert = await this.alerta.create({
  //     header: 'Senha incorreta',
  //     message: 'A senha inserida está incorreta!',
  //     buttons: ['OK']
  //   })
  //   await alert.present(); 
  // }

  // async mostrarAlertaEmail(){
  //   const alert = await this.alerta.create({
  //     header: 'Conta não encontrada',
  //     message: 'Verifique se o email foi digitado corretamente. Se você não possui uma conta, é necessário se cadastrar.',
  //     buttons: ['OK']
  //   })

  //   await alert.present(); 
  // }
}
