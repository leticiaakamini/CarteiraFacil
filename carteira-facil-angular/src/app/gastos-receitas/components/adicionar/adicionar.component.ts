import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Location } from '@angular/common';
import { format, parseISO } from 'date-fns';
import { ActivatedRoute } from '@angular/router';
import { GastoReceitaService } from '../../services/gasto-receita.service';
import { FormBaseDirective } from 'src/app/shared/form-base/form-base.directive';
import { ValidacoesForm } from 'src/app/shared/validacoes-form';

@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.component.html',
  styleUrls: ['./adicionar.component.scss'],
})
export class AdicionarComponent extends FormBaseDirective implements OnInit { 

  showPicker = false;
  dateValue = '';
  formattedString = '';
  movimentacao = '';
  adicionarOuEditar = '';

  constructor(
    private formBuilder: FormBuilder,
    private service: GastoReceitaService,
    private toastController: ToastController,
    private location: Location,
    private route: ActivatedRoute
  ) { 
    super();
    this.setToday();
  }

  ngOnInit() {
    this.tipoMovimentacao();

    if (this.movimentacao == 'Gasto') {
      this.form = this.formBuilder.group({
        id: [null],
        tipo: ['Gasto'],
        data: ['', Validators.required],
        nome: ['', Validators.required],
        tipoGasto: ['', Validators.required],
        valor: ['', [Validators.required, ValidacoesForm.valorValidator]]
      }); 
    } else {
      this.form = this.formBuilder.group({
        id: [null],
        tipo: ['Receita'],
        data: ['', Validators.required],
        nome: ['', Validators.required],
        tipoGasto: [null],
        valor: ['', [Validators.required, ValidacoesForm.valorValidator]]
      }); 
    }

    //const gastoReceita: Observable<GastoReceita>
    this.service.buscarPorId(this.route.snapshot.params.id).subscribe(resposta => {
      this.form.setValue({
        id: resposta.id,
        nome: resposta.nome,
        data: resposta.data,
        tipo: resposta.tipo,
        tipoGasto: resposta.tipoGasto,
        valor: resposta.valor
      })
      console.log(resposta)
      console.log(this.route.snapshot.url[0].path)
    });
  }

  adicionar(){
    this.form.controls['valor'].setValue(
      this.form.controls['valor'].value.toString().replace(",", ".")
    )

    this.service.salvar(this.form.value).subscribe(
      () => this.mensagemSucesso(),
      () => this.mensagemErro()
    );
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

  setToday(){
    this.formattedString = format(new Date(), 'dd/MM/yyyy');
    this.dateValue = this.formattedString;
  }

  dateChanged(valor){
    this.dateValue = valor;
    this.formattedString = format(parseISO(valor), 'dd/MM/yyyy');
  }

  tipoMovimentacao(){
    if (this.route.snapshot.pathFromRoot[1].routeConfig.path == 'gasto') {
      this.movimentacao = 'Gasto';
    } else if (this.route.snapshot.pathFromRoot[1].routeConfig.path == 'receita') {
      this.movimentacao = 'Receita';
    }

    if (this.route.snapshot.url[0].path == 'adicionar') {
      this.adicionarOuEditar = 'adicionar'
    } else if (this.route.snapshot.url[0].path == 'editar') {
      this.adicionarOuEditar = 'editar'
    }
  }

  onSubmit(){
    console.log(this.form)
  }

  validaValor(valor){
    return !this.form.get(valor).valid && this.verificaValidTouched(valor);
  }
}
