import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GastoReceitaService } from '../gastos-receitas/services/gasto-receita.service';
import { GastoReceita } from '../gastos-receitas/model/gasto-receita';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.page.html',
  styleUrls: ['./extrato.page.scss'],
})
export class ExtratoPage implements OnInit {

  saldoAtual: number = 0;
  gastoTotal = 0;
  receitaTotal = 0;
  gastosReceitas: GastoReceita[];

  constructor(
    private service: GastoReceitaService
  ) {}

  ngOnInit() {
    this.service.listar().subscribe(resposta => {
      this.gastosReceitas = resposta
      //this.calcularSaldo()
    });
  }

  //incompleto 

  // calcularSaldo(){
  //   this.gastosReceitas.forEach(gasto => this.gastoTotal = gasto.valor + this.gastoTotal);
  //   this.receitas.forEach(receita => this.receitaTotal = receita.valor + this.receitaTotal);
  //   this.saldoAtual = this.receitaTotal - this.gastoTotal;
  // }
}
