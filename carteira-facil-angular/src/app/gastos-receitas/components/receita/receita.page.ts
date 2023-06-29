import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GastoReceitaService } from '../../services/gasto-receita.service';
import { GastoReceita } from '../../model/gasto-receita';
import { Observable } from 'rxjs';
import { AlertController, ToastController } from '@ionic/angular';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-receita',
  templateUrl: './receita.page.html',
  styleUrls: ['./receita.page.scss'],
})
export class ReceitaPage implements OnInit {

  receitas$: Observable<GastoReceita[]> | null = null;

  constructor(
    private service: GastoReceitaService,
    private router: Router,
    private route: ActivatedRoute,
    private alerta: AlertController,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    this.atualizarReceita();
  }

  navegar(pagina: string){
    this.router.navigate([pagina]);
  }

  adicionar(){
    this.router.navigate(['adicionar'], { relativeTo: this.route});
  }

  editar(receita: GastoReceita) {
    this.router.navigate(['editar', receita.id], { relativeTo: this.route });
    if (this.route.params && this.route.params['id']) {
      return this.service.buscarPorId(this.route.params['id']);
    }
  }

  async excluir(receita: GastoReceita) {
    const alert = await this.alerta.create({
      message: 'Tem certeza de que deseja excluir essa receita?',
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
      this.service.deletar(receita.id).subscribe(() => {
        this.atualizarReceita();
        this.excluidoSucesso();
      });
      console.log("excluido")
    } else{
      console.log("cancelado")
    }
  }

  async excluidoSucesso(){
    const toast = await this.toastController.create({
      message: 'Receita removida com sucesso!',
      duration: 5000,
    });

    await toast.present();
  }

  atualizarReceita(){
    this.receitas$ = this.service.listar().pipe(
      map(
        (receitas: GastoReceita[]) => receitas.filter(receita => receita.tipo == 'Receita')
      )
    );
  }
}
