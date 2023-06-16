import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Desejo } from '../../model/desejo';
import { DesejoService } from '../../services/desejo.service';

@Component({
  selector: 'app-lista-desejo',
  templateUrl: './lista-desejo.page.html',
  styleUrls: ['./lista-desejo.page.scss'],
})
export class ListaDesejoPage implements OnInit {

  desejos$: Observable<Desejo[]> | null = null;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: DesejoService
  ) { }

  ngOnInit() {
    this.atualizarListaDesejos();
  }

  adicionar() {
    this.router.navigate(['adicionar'], { relativeTo: this.route });
  }

  atualizarListaDesejos(){
    this.desejos$ = this.service.listar().pipe();
  }

}
