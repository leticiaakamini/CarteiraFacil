import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GastoReceita } from '../../model/gasto-receita';
import { ActivatedRoute, Router } from '@angular/router';
import { GastoReceitaService } from '../../services/gasto-receita.service';
import { AlertController, ToastController } from '@ionic/angular';
import { Observable, pipe } from 'rxjs';


@Component({
  selector: 'app-gasto',
  templateUrl: './gasto.page.html',
  styleUrls: ['./gasto.page.scss'],
})
export class GastoPage implements OnInit {

  //gastosReceitas: GastoReceita[] = [];
  gastosReceitas$: Observable<GastoReceita[]> | null = null;
  abaSelecionada = 'eventual';
  gastosFixos: GastoReceita[]=[];
  gastosEventuais: GastoReceita[]=[];

  constructor(
    private service: GastoReceitaService,
    private router: Router,
    private route: ActivatedRoute,
    private alerta: AlertController,
    private toastController: ToastController
  ) {
    this.gastosReceitas$ = this.service.listar().pipe();
    
  }

  ngOnInit() {

    // this.service.listar()
    //   .subscribe(resposta => {
    //     this.gastosReceitas = resposta;
    //     this.gastosEventuais = this.gastosReceitas.filter(gasto => (gasto.tipoGasto != 'fixo') && (gasto.tipoGasto != null));
    //     this.gastosFixos = this.gastosReceitas.filter(gasto => gasto.tipoGasto == 'fixo');
    //   });
  }

  adicionar() {
    this.router.navigate(['adicionar'], { relativeTo: this.route });
  }

  editar(gasto: GastoReceita) {
    this.router.navigate(['editar', gasto.id], { relativeTo: this.route });
    if (this.route.params && this.route.params['id']) {
      return this.service.buscarPorId(this.route.params['id']);
    }
  }

  async excluir(gasto: GastoReceita) {
    const alert = await this.alerta.create({
      message: 'Tem certeza que deseja excluir esse gasto?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'OK',
          role: 'confirm'
        }
      ]
    })

    await alert.present();

    if ((await alert.onDidDismiss()).role == 'confirm') {
      this.service.deletar(gasto.id).subscribe(() => {
        this.gastosReceitas$ = this.service.listar().pipe();
        this.excluidoSucesso();
      });
      console.log("excluido")
    } else{
      console.log("cancelado")
    }
  }

  async excluidoSucesso(){
    const toast = await this.toastController.create({
      message: 'Gasto removido com sucesso!',
      duration: 5000,
    });

    await toast.present();
  }
}
