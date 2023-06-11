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
  gastoTotal = 0;
  receitaTotal = 0;

  constructor(
    public alertController: AlertController, 
    private service: GastoReceitaService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.service.listar().subscribe((gastosReceitas) => this.calcularSaldo(gastosReceitas))
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
      } else {
        this.receitaTotal = gastoReceita.valor + this.receitaTotal;
      }
        
      this.saldoAtual = this.receitaTotal + this.gastoTotal;
    })
  }

  navegar(pagina: string){
    this.router.navigate([pagina]);
  }
} 
