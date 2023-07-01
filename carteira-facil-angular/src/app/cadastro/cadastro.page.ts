import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CadastroService } from './services/cadastro.service';
import { ValidacoesForm } from '../shared/validacoes-form';
import { FormBaseDirective } from '../shared/form-base/form-base.directive';
import { ToastController } from '@ionic/angular';
import { Location } from '@angular/common';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage extends FormBaseDirective implements OnInit {

  //form: FormGroup;

  constructor(
    private formBuilder: UntypedFormBuilder,
    private service: CadastroService,
    private toastController: ToastController,
    private location: Location
  ) { 
    super();
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      id: [null],
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', ValidacoesForm.telefoneValidator],
      senha: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]],
      confirmarSenha: ['', [Validators.required, ValidacoesForm.igualA('senha')]]
    }); 
  }

  adicionar(){
    this.service.adicionar(this.form.value).subscribe(
      () => this.mensagemSucesso(),
      () => this.mensagemErro()
    );
  }

  async mensagemSucesso(){
    const toast = await this.toastController.create({
      message: 'Cadastro realizado com sucesso!',
      duration: 5000,
    });

    await toast.present();
    this.cancelar();
  }

  async mensagemErro(){
    const toast = await this.toastController.create({
      message: 'Email já cadastrado!',
      duration: 5000,
    });

    await toast.present();
  }

  cancelar(){
    this.location.back();
  }

  verificaTelefone(telefone: string){
    return !this.form.get(telefone).valid;
  }
}
