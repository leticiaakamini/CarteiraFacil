import { Component, Input, OnInit} from '@angular/core';
import { AlertController } from '@ionic/angular';
import { GastoReceita } from '../gastos-receitas/model/gasto-receita';
import { GastoReceitaService } from '../gastos-receitas/services/gasto-receita.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

  gastosReceitas: GastoReceita[];
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
    this.service.listar().subscribe(resposta => {
      this.gastosReceitas = resposta
      //this.calcularSaldo()
    });
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

  //incompleto
  
  // calcularSaldo(){
  //   this.gastos.forEach(gasto => this.gastoTotal = gasto.valor + this.gastoTotal);
  //   this.receitas.forEach(receita => this.receitaTotal = receita.valor + this.receitaTotal);
  //   this.saldoAtual = this.receitaTotal - this.gastoTotal;
  // }

  navegar(pagina: string){
    this.router.navigate([pagina]);
  }
} 
