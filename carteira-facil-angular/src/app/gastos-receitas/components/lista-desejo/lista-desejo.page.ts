import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Desejo } from '../../model/desejo';
import { DesejoService } from '../../services/desejo.service';
import { AlertController, ToastController } from '@ionic/angular';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-lista-desejo',
  templateUrl: './lista-desejo.page.html',
  styleUrls: ['./lista-desejo.page.scss'],
})
export class ListaDesejoPage implements OnInit {

  desejos$: Observable<Desejo[]> | null = null;
  quantiaFaltante

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: DesejoService,
    private alerta: AlertController,
    private toastController: ToastController
  ) { }

  ngOnInit() {
    this.atualizarListaDesejos();
  }

  navegar(pagina: string){
    this.router.navigate([pagina]);
  }

  adicionar() {
    this.router.navigate(['adicionar'], { relativeTo: this.route });
  }

  atualizarListaDesejos() {
    this.desejos$ = this.service.listar().pipe();
  }

  editar(desejo: Desejo) {
    this.router.navigate(['editar', desejo.id], { relativeTo: this.route });
    if (this.route.params && this.route.params['id']) {
      return this.service.buscarPorId(this.route.params['id']);
    }
  }

  calcularPorcentagem(valor, quantiaEconomizada){
    return ((quantiaEconomizada/valor) * 100).toFixed(1)
  }

  concluirDesejo(nome){
    
  }

  async excluir(desejo: Desejo) {
    const alert = await this.alerta.create({
      message: 'Tem certeza de que deseja excluir esse desejo?',
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
      this.service.deletar(desejo.id).subscribe(() => {
        this.atualizarListaDesejos(),
        this.excluidoSucesso();
      });
    }
  }

  async excluidoSucesso() {
    const toast = await this.toastController.create({
      message: 'Desejo removido com sucesso!',
      duration: 5000,
    });

    await toast.present();
  }
}
