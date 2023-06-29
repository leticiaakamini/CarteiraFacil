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
  senhaAtualCorreta: boolean = false;

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

  atualizar(){
    this.service.buscarPorId().subscribe(resposta => {
      if (this.form.get('senha').value == resposta.senha) {
        this.senhaAtualCorreta = true;
      }
    })
    
    if (this.senhaAtualCorreta) {
      this.form.patchValue({
        senha: this.form.get('novaSenha').value
      });

      this.service.atualizar(this.form.value).subscribe(
        () => this.mensagemSucesso(),
        () => this.mensagemErro()
      )
    } else {
      console.log("Senha atual incorreta")
    }
  }

  cancelar(){
    this.location.back();
  }

  async mensagemSucesso(){
    const toast = await this.toastController.create({
      message: 'Salvo com sucesso!',
      duration: 5000,
    });

    await toast.present();
    this.cancelar();
  }

  async mensagemErro(){
    const toast = await this.toastController.create({
      message: 'Erro ao salvar!',
      duration: 5000,
    });

    await toast.present();
  }
}
