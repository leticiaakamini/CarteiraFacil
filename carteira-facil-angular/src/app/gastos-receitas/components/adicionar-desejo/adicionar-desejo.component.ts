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
  prazoMesAno: string = '';
  camposViagem: string[][] = [
    ['passagem', ''],
    ['hospedagem', ''],
    ['alimentacao', ''],
    ['transporte', ''],
    ['compras', ''],
    ['lazer', ''],
    ['burocracia', ''],
    ['gastosExtras', ''],
    ['total', '']
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
      burocracia: ['', ValidacoesForm.valorValidator],
      prazo: [''],
      idUsuario: [null]
    });

    if (this.adicionarOuEditar == 'editar') {
      this.service.buscarPorId(this.route.snapshot.params.id).subscribe(resposta => {
        this.form.setValue({
          id: resposta.id,
          nome: resposta.nome,
          tipo: resposta.tipo,
          economizar: resposta.economizar.toFixed(2),
          quantiaEconomizada: resposta.quantiaEconomizada.toFixed(2),
          valor: resposta.valor.toFixed(2),
          hospedagem: resposta.hospedagem.toFixed(2),
          alimentacao: resposta.alimentacao.toFixed(2),
          passagem: resposta.passagem.toFixed(2),
          transporte: resposta.transporte.toFixed(2),
          compras: resposta.compras.toFixed(2),
          lazer: resposta.lazer.toFixed(2),
          gastosExtras: resposta.gastosExtras.toFixed(2),
          burocracia: resposta.burocracia.toFixed(2),
          prazo: resposta.prazo,
          idUsuario: resposta.idUsuario
        });

        this.setTipoDesejo(resposta.tipo);

        // let total = resposta.hospedagem + 
        //             resposta.alimentacao + 
        //             resposta.passagem + 
        //             resposta.transporte + 
        //             resposta.compras + 
        //             resposta.lazer + 
        //             resposta.gastosExtras + 
        //             resposta.burocracia;

        // this.totalViagemFormatado = total.toString();

        this.calcularTotalViagem(resposta.hospedagem.toFixed(2), 'hospedagem')
        this.calcularTotalViagem(resposta.alimentacao.toFixed(2), 'alimentacao')
        this.calcularTotalViagem(resposta.passagem.toFixed(2), 'passagem')
        this.calcularTotalViagem(resposta.transporte.toFixed(2), 'transporte')
        this.calcularTotalViagem(resposta.compras.toFixed(2), 'compras')
        this.calcularTotalViagem(resposta.lazer.toFixed(2), 'lazer')
        this.calcularTotalViagem(resposta.gastosExtras.toFixed(2), 'gastosExtras')
        this.calcularTotalViagem(resposta.burocracia.toFixed(2), 'burocracia')
      });
    }
  }

  setTipoDesejo(tipo){
    this.tipoDesejo = tipo;
    this.escolhaTipoDesejo();
  }

  escolhaTipoDesejo() {
    if (this.tipoDesejo == 'viagem') {
      this.desejoViagem = true;
    } else {
      this.desejoViagem = false;
    }
  }

  adicionar() {
    this.calcularPrazo();

    this.form.patchValue({
      economizar: parseFloat(this.form.controls['economizar'].value.replace(",", ".")).toFixed(2),
      quantiaEconomizada: parseFloat(this.verificaCampoVazio('quantiaEconomizada')).toFixed(2),
      valor: parseFloat(this.form.controls['valor'].value.replace(",", ".")).toFixed(2),
      prazo: this.form.controls['prazo'].value.replace(this.form.controls['prazo'].value, this.prazoMesAno)
    })

    if (this.desejoViagem) {
      this.form.patchValue({
        hospedagem: parseFloat(this.verificaCampoVazio('hospedagem')).toFixed(2),
        alimentacao: parseFloat(this.verificaCampoVazio('alimentacao')).toFixed(2),
        passagem: parseFloat(this.verificaCampoVazio('passagem')).toFixed(2),
        transporte: parseFloat(this.verificaCampoVazio('transporte')).toFixed(2),
        compras: parseFloat(this.verificaCampoVazio('compras')).toFixed(2),
        lazer: parseFloat(this.verificaCampoVazio('lazer')).toFixed(2),
        gastosExtras: parseFloat(this.verificaCampoVazio('gastosExtras')).toFixed(2),
        burocracia: parseFloat(this.verificaCampoVazio('burocracia')).toFixed(2)
      })
    }

    this.service.salvar(this.form.value).subscribe(
      () => this.mensagemSucesso(),
      () => this.mensagemErro()
    );

    console.log(this.form.value)
  }

  verificaCampoVazio(campo: string) {
    if (this.form.get(campo).value == '') {
      return '0.00';
    } else {
      return this.form.controls[campo].value.replace(",", ".");
    }
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
      for (const element of this.camposViagem) {
        if (element[0] == campo && element[1] != '') {
          this.totalViagem = this.totalViagem - parseFloat(element[1]);
        }

        if (element[0] == campo) {
          if (valor == '') {
            valor = "0.00"
          }
          valor = valor.replace(",", ".");
          element[1] = valor;
          this.totalViagem = this.totalViagem + parseFloat(valor);
          this.totalViagemFormatado = this.totalViagem.toFixed(2);
        }
      }
    }
  }

  calcularPrazo() {
    let dataAtual = new Date(Date.now());
    let prazoMes = Math.round(parseFloat(this.form.controls['valor'].value.replace(",", ".")) / parseFloat(this.form.controls['economizar'].value.replace(",", ".")));
    let auxAno: number = 0;

    prazoMes = prazoMes + (dataAtual.getMonth() + 1);

    while (prazoMes > 12) {
      auxAno++;
      prazoMes = prazoMes - 12;
    }
    this.prazoMesAno = (prazoMes) + '/' + (dataAtual.getFullYear() + auxAno);
  }

  tipoAdicionarEditar() {
    if (this.route.snapshot.url[0].path == 'adicionar') {
      this.adicionarOuEditar = 'adicionar'
    } else if (this.route.snapshot.url[0].path == 'editar') {
      this.adicionarOuEditar = 'editar'
    }
  }
}
