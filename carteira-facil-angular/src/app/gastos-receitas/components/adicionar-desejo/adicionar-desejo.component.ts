import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormBaseDirective } from 'src/app/shared/form-base/form-base.directive';
import { ValidacoesForm } from 'src/app/shared/validacoes-form';
import { DesejoService } from '../../services/desejo.service';
import { ToastController } from '@ionic/angular';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-adicionar-desejo',
  templateUrl: './adicionar-desejo.component.html',
  styleUrls: ['./adicionar-desejo.component.scss'],
})
export class AdicionarDesejoComponent extends FormBaseDirective implements OnInit {

  adicionarOuEditar = '';
  tipoDesejo: string;
  desejoViagem: boolean = false;
  totalViagem: number = 0;
  campoVerificado = '';

  constructor(
    private formBuilder: FormBuilder,
    private service: DesejoService,
    private toastController: ToastController,
    private location: Location,
    private route: ActivatedRoute
  ) { 
    super();
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      id: [null],
      nome: ['', Validators.required],
      tipo: ['', Validators.required],
      economizar: ['', [Validators.required, ValidacoesForm.valorValidator]],
      quantiaEconomizada: ['', ValidacoesForm.valorValidator],
      valor: ['', [Validators.required, ValidacoesForm.valorValidator]],
      hospedagem: ['', ValidacoesForm.valorValidator],
      alimentacao: ['', ValidacoesForm.valorValidator],
      passagem: ['', ValidacoesForm.valorValidator],
      transporte: ['', ValidacoesForm.valorValidator],
      compras: ['', ValidacoesForm.valorValidator],
      lazer: ['', ValidacoesForm.valorValidator],
      gastosExtras: ['', ValidacoesForm.valorValidator],
      burocracia: ['', ValidacoesForm.valorValidator]
    });

    this.service.buscarPorId(this.route.snapshot.params.id).subscribe(resposta => {
      this.form.setValue({
        id: resposta.id,
        nome: resposta.nome,
        tipo: resposta.tipo,
        economizar: resposta.economizar,
        quantiaEconomizada: resposta.quantiaEconomizada,
        valor: resposta.valor,
        hospedagem: resposta.hospedagem,
        alimentacao: resposta.alimentacao,
        passagem: resposta.passagem,
        transporte: resposta.transporte,
        compras: resposta.compras,
        lazer: resposta.lazer,
        gastosExtras: resposta.gastosExtras,
        burocracia: resposta.burocracia
      })
      console.log(resposta)
      console.log(this.route.snapshot.url[0].path)
    });
  }

  escolhaTipoDesejo(){
    if (this.tipoDesejo == 'viagem') {
      this.desejoViagem = true;
    } else {
      this.desejoViagem = false;
    }
  }

  adicionar(){
    if (!this.desejoViagem) {
      console.log("bem material")
      this.form.patchValue({
        economizar: this.form.controls['economizar'].value.toString().replace(",", "."),
        quantiaEconomizada: this.form.controls['quantiaEconomizada'].value.toString().replace(",", "."),
        valor: this.form.controls['valor'].value.toString().replace(",", "."),
      })
    } else {
      console.log("viagem")
      this.form.patchValue({
        economizar: this.form.controls['economizar'].value.toString().replace(",", "."),
        quantiaEconomizada: this.form.controls['quantiaEconomizada'].value.toString().replace(",", "."),
        valor: this.form.controls['valor'].value.toString().replace(",", "."),
        hospedagem: this.form.controls['hospedagem'].value.toString().replace(",", "."),
        alimentacao: this.form.controls['alimentacao'].value.toString().replace(",", "."),
        passagem: this.form.controls['passagem'].value.toString().replace(",", "."),
        transporte: this.form.controls['transporte'].value.toString().replace(",", "."),
        compras: this.form.controls['compras'].value.toString().replace(",", "."),
        lazer: this.form.controls['lazer'].value.toString().replace(",", "."),
        gastosExtras: this.form.controls['gastosExtras'].value.toString().replace(",", "."),
        burocracia: this.form.controls['burocracia'].value.toString().replace(",", "."),
      })
    }
    
    this.service.salvar(this.form.value).subscribe(
      () => this.mensagemSucesso(),
      () => this.mensagemErro()
    );

    console.log(this.form.controls)
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

  calcularTotalViagem(valor: string, campo: string){

    console.log(valor)
    console.log(campo)

    // if (!this.verificaValidTouched(campo)) {
    //   if (this.campoVerificado != campo) {
    //     this.campoVerificado = campo;        
    //   } else {
    //     this.totalViagem = 0;
    //   }
    //   valor = valor.toString().replace(",", ".");
    //   let campoNumber = parseFloat(valor);
    //   this.totalViagem = this.totalViagem + campoNumber;     
      
    //   console.log(this.totalViagem);
    // }
  }
}
