import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Location } from '@angular/common';
import { format, parseISO } from 'date-fns';
import { ActivatedRoute, Router } from '@angular/router';
import { GastoReceitaService } from '../../services/gasto-receita.service';
import { GastoReceita } from '../../model/gasto-receita';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.component.html',
  styleUrls: ['./adicionar.component.scss'],
})
export class AdicionarComponent implements OnInit { 

  showPicker = false;
  dateValue = '';
  formattedString = '';
  movimentacao = '';

  form = this.formBuilder.group({
    id: null,
    tipo: [''],
    data: this.dateValue,
    nome: [''],
    tipoGasto: [''],
    valor: [0.0]
  }); 

  constructor(
    private formBuilder: FormBuilder,
    private service: GastoReceitaService,
    private toastController: ToastController,
    private location: Location,
    private router: Router,
    private route: ActivatedRoute
  ) { 
  
    this.setToday();
  }

  ngOnInit() {
    this.tipoMovimentacao();
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
      console.log(this.route.snapshot.pathFromRoot[1].routeConfig.path)
    });
  }

  adicionar(){
    this.service.salvar(this.form.value).subscribe(
      resposta => console.log(resposta)
    );

    console.log(this.formattedString);
    console.log(this.form.value);
    this.salvarSucesso();
    //this.cancelar();
  }

  cancelar(){
    this.location.back();
  }

  async salvarSucesso(){
    const toast = await this.toastController.create({
      message: 'Gasto salvo com sucesso!',
      duration: 5000,
    });

    toast.present();
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
    };
  }

}
