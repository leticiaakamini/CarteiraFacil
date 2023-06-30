import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Cadastro } from 'src/app/cadastro/model/cadastro';
import { CadastroService } from 'src/app/cadastro/services/cadastro.service';
import { ValidacoesForm } from 'src/app/shared/validacoes-form';

@Component({
  selector: 'app-alterar-dados',
  templateUrl: './alterar-dados.page.html',
  styleUrls: ['./alterar-dados.page.scss'],
})
export class AlterarDadosPage implements OnInit {

  form: FormGroup;
  alterarSenha: boolean = false;
  formSetado: boolean = false;

  constructor(
    private service: CadastroService,
    private formBuilder: FormBuilder,
    private location: Location,
    private toastController: ToastController
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      id: [null],
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', ValidacoesForm.telefoneValidator],
      senha: ['', [Validators.minLength(6), Validators.maxLength(10)]],
      novaSenha: ['', [Validators.minLength(6), Validators.maxLength(10)]]
    });

    this.service.buscarPorId().subscribe(resposta => {
      this.form.patchValue({
        id: resposta.id,
        nome: resposta.nome,
        email: resposta.email,
        telefone: resposta.telefone
      });
    },
      erro => console.log(erro))
  }

  verificarAlterarSenha(event) {
    this.alterarSenha = event.detail.checked
  }

  atualizar() {
    this.service.buscarPorId().subscribe(resposta => {
      if (this.alterarSenha) {
        if (this.form.get('senha').value != '' && this.form.get('novaSenha').value != '') {
          if (this.form.get('senha').value == resposta.senha) {
            this.form.patchValue({
              senha: this.form.get('novaSenha').value
            });
            this.formSetado = true;
          } else {
            this.mensagemSenhaIncorreta();
          }
        } else {
          this.mensagemAvisoSenha();
        }
      } else {
        this.form.patchValue({
          senha: resposta.senha
        });
        this.formSetado = true;
      }

      if (this.formSetado) {
        this.service.atualizar(this.form.value).subscribe(
          () => this.mensagemSucesso(),
          () => this.mensagemErro()
        )
      }
    })
  }

  cancelar() {
    this.location.back();
  }

  async mensagemSucesso() {
    const toast = await this.toastController.create({
      message: 'Salvo com sucesso!',
      duration: 5000,
    });

    await toast.present();
    this.cancelar();
  }

  async mensagemErro() {
    const toast = await this.toastController.create({
      message: 'Erro ao salvar!',
      duration: 5000,
    });

    await toast.present();
  }

  async mensagemAvisoSenha() {
    const toast = await this.toastController.create({
      message: 'É necessário preencher a senha atual e a nova senha!',
      duration: 5000,
    });

    await toast.present();
  }

  async mensagemSenhaIncorreta() {
    const toast = await this.toastController.create({
      message: 'Senha atual incorreta!',
      duration: 5000,
    });

    await toast.present();
  }
}
