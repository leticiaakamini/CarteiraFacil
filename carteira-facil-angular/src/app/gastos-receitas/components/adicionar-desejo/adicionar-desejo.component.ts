import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormBaseDirective } from 'src/app/shared/form-base/form-base.directive';
import { ValidacoesForm } from 'src/app/shared/validacoes-form';

@Component({
  selector: 'app-adicionar-desejo',
  templateUrl: './adicionar-desejo.component.html',
  styleUrls: ['./adicionar-desejo.component.scss'],
})
export class AdicionarDesejoComponent extends FormBaseDirective implements OnInit {

  adicionarOuEditar = '';
  desejoViagem = true;

  constructor(
    private formBuilder: FormBuilder,
  ) { 
    super();
  }

  ngOnInit() {

    // fazer 2 forms diferentes: 1 pra bem material e outro pra viagem
    this.form = this.formBuilder.group({
      id: [null],
      nome: ['', Validators.required],
      tipo: ['', Validators.required],
      economizar: ['', [Validators.required, ValidacoesForm.valorValidator]],
      quantiaEconomizada: ['', ValidacoesForm.valorValidator],
      valor: ['', [Validators.required, ValidacoesForm.valorValidator]],
      total: ['', [Validators.required, ValidacoesForm.valorValidator]],
      hospedagem: ['', ValidacoesForm.valorValidator],
      alimentacao: ['', ValidacoesForm.valorValidator],
      passagem: ['', ValidacoesForm.valorValidator],
      transporte: ['', ValidacoesForm.valorValidator],
      compras: ['', ValidacoesForm.valorValidator],
      lazer: ['', ValidacoesForm.valorValidator],
      gastosExtras: ['', ValidacoesForm.valorValidator],
      burocracia: ['', ValidacoesForm.valorValidator]
    });
  }

}
