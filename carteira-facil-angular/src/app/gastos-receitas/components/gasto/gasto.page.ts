import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GastoReceita } from '../../model/gasto-receita';
import { ActivatedRoute, Router } from '@angular/router';
import { GastoReceitaService } from '../../services/gasto-receita.service';
import { AlertController, ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'


@Component({
  selector: 'app-gasto',
  templateUrl: './gasto.page.html',
  styleUrls: ['./gasto.page.scss'],
})
export class GastoPage implements OnInit {

  gastosEssenciais$: Observable<GastoReceita[]> | null = null;
  gastosEventuais$: Observable<GastoReceita[]> | null = null;
  abaSelecionada = 'eventual';

  constructor(
    private service: GastoReceitaService,
    private router: Router,
    private route: ActivatedRoute,
    private alerta: AlertController,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    this.atualizarGastoEssencial();
    this.atualizarGastoEventual();    
  }

  navegar(pagina: string){
    this.router.navigate([pagina]);
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
      message: 'Tem certeza de que deseja excluir esse gasto?',
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
        if (gasto.tipoGasto == 'essencial') {
          this.atualizarGastoEssencial();
        } else {
          this.atualizarGastoEventual();
        }
        
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

  atualizarGastoEssencial(){
    this.gastosEssenciais$ = this.service.listar().pipe(
      map(
        (gasto: GastoReceita[]) => gasto.filter(gastoEssencial => gastoEssencial.tipoGasto == 'Essencial')
      )
    );
  }

  atualizarGastoEventual(){
    this.gastosEventuais$ = this.service.listar().pipe(
      map(
        (gasto: GastoReceita[]) => gasto.filter(gastoEventual => (gastoEventual.tipoGasto != 'Essencial') && (gastoEventual.tipoGasto != null))
      )
    );
  }
}
