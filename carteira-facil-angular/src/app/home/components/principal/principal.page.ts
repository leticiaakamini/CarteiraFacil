import { Component, Input, OnInit} from '@angular/core';
import { AlertController } from '@ionic/angular';
import { GastoReceita } from '../../../gastos-receitas/model/gasto-receita';
import { GastoReceitaService } from '../../../gastos-receitas/services/gasto-receita.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

  saldoAtual: number = 0;
  saldoAtualFormatado: string;
  gastoTotal = 0;
  gastoTotalFormatado: string;
  receitaTotal = 0;
  receitaTotalFormatado: string;
  mensagem: string = '';

  constructor(
    public alertController: AlertController, 
    private service: GastoReceitaService,
    private router: Router
  ) { }

  ngOnInit() {
    this.service.listar().subscribe((gastosReceitas) => this.calcularSaldo(gastosReceitas));
  }

  async alerta() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      message: 'Tem certeza de que deseja excluir?',
      buttons: ['CANCELAR', 'EXCLUIR'] 
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
  
  calcularSaldo(gastosReceitas: GastoReceita[]){
    gastosReceitas.forEach(gastoReceita => {
      if (gastoReceita.tipo == 'Gasto') {
        gastoReceita.valor = -1 * gastoReceita.valor;
        this.gastoTotal = gastoReceita.valor + this.gastoTotal;
        this.gastoTotalFormatado = this.gastoTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
      } else {
        this.receitaTotal = gastoReceita.valor + this.receitaTotal;
        this.receitaTotalFormatado = this.receitaTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
      }
        
      this.saldoAtual = this.receitaTotal + this.gastoTotal;
      this.saldoAtualFormatado = this.saldoAtual.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
      this.mostrarMensagem();
    })
  }

  navegar(pagina: string){
    this.router.navigate([pagina]);
  }

  mostrarMensagem(){
    if (this.saldoAtual > 0) {
      this.mensagem = 'Você recebeu mais do que gastou!';
    } else if (this.saldoAtual < 0) {
      this.mensagem = 'Você gastou mais do que recebeu!'
    }
  }
} 
