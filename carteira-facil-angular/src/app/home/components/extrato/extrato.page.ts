import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GastoReceitaService } from '../../../gastos-receitas/services/gasto-receita.service';
import { GastoReceita } from '../../../gastos-receitas/model/gasto-receita';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.page.html',
  styleUrls: ['./extrato.page.scss'],
})
export class ExtratoPage implements OnInit {

  saldoAtual: number = 0;
  saldoAtualFormatado: string;
  gastoTotal = 0;
  receitaTotal = 0;
  gastosReceitas$: Observable<GastoReceita[]> | null = null;

  constructor(
    private service: GastoReceitaService
  ) {}

  ngOnInit() {
    this.gastosReceitas$ = this.service.listar().pipe(
      map(
        (gastosReceitas: GastoReceita[]) => this.ordenarDatas(gastosReceitas)
      ),
      map(
        (gastosReceitas: GastoReceita[]) => this.calcularSaldo(gastosReceitas)
      )
    );
  }

  formatarData(gastoReceita: GastoReceita[]){
    return gastoReceita.map((ab) => ab.data.substring(0,5))
  }

  ordenarDatas(gastosReceitas: GastoReceita[]){
    gastosReceitas.forEach((gastoReceita: GastoReceita) => {
      let data = gastoReceita.data;
      let arrayData = data.split('/');
      let dataFormatada = arrayData[1] + '/' + arrayData[0] + '/' + arrayData[2]
      let dataDate = new Date(dataFormatada)
    })

    gastosReceitas.sort((a,b) => new Date(a.data).getTime() - new Date(b.data).getTime())
    return gastosReceitas
  }

  calcularSaldo(gastosReceitas: GastoReceita[]){
    gastosReceitas.forEach(gastoReceita => {
      if (gastoReceita.tipo == 'Gasto') {
        gastoReceita.valor = -1 * gastoReceita.valor;
        this.gastoTotal = gastoReceita.valor + this.gastoTotal;
      } else {
        this.receitaTotal = gastoReceita.valor + this.receitaTotal;
      }
      this.saldoAtual = this.receitaTotal + this.gastoTotal;
      this.saldoAtualFormatado = this.saldoAtual.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
      return gastoReceita;
    })
    return gastosReceitas;
  }
}
