import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
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
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdicionarDesejoComponent extends FormBaseDirective implements OnInit, AfterViewInit {

  adicionarOuEditar = '';
  tipoDesejo: string;
  desejoViagem: boolean = false;
  totalViagem: number = 0;
  totalViagemFormatado: string;
  camposViagem: string[][] = [
    ['passagem', ''],
    ['hospedagem', ''],
    ['alimentacao', ''],
    ['transporte', ''],
    ['compras', ''],
    ['lazer', ''],
    ['burocracia', ''],
    ['gastosExtras', '']
  ]

  constructor(
    private formBuilder: FormBuilder,
    private service: DesejoService,
    private toastController: ToastController,
    private location: Location,
    private route: ActivatedRoute,
    private cdRef: ChangeDetectorRef  
  ) {
    super();
  }

  ngAfterViewInit(): void {
    this.cdRef.detectChanges();
  }

  ngOnInit() {
    this.tipoAdicionarEditar();

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

    if(this.adicionarOuEditar == 'editar'){
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
      });
    }
  }

  escolhaTipoDesejo() {
    if (this.tipoDesejo == 'viagem') {
      this.desejoViagem = true;
    } else {
      this.desejoViagem = false;
    }
  }

  adicionar() {
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

  calcularTotalViagem(valor: string, campo: string) {

    if (this.form.get(campo).valid) {
      for (let i = 0; i < this.camposViagem.length; i++) {
        if (this.camposViagem[i][0] == campo && this.camposViagem[i][1] != '') {
          this.totalViagem = this.totalViagem - parseFloat(this.camposViagem[i][1]);
        } 

        if(this.camposViagem[i][0] == campo) {
          if (valor == '') {
            valor = "0,00"
          }
          valor = valor.toString().replace(",", ".");
          this.camposViagem[i][1] = valor;
          let campoNumber = parseFloat(valor);
          this.totalViagem = this.totalViagem + campoNumber;
          this.totalViagemFormatado = this.totalViagem.toFixed(2);
        }
      }

      console.log(this.form.controls)
    }
  }

  tipoAdicionarEditar(){
    if (this.route.snapshot.url[0].path == 'adicionar') {
      this.adicionarOuEditar = 'adicionar'
    } else if (this.route.snapshot.url[0].path == 'editar') {
      this.adicionarOuEditar = 'editar'
    }
  }
}
