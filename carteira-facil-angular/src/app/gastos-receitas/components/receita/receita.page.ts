import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GastoReceitaService } from '../../services/gasto-receita.service';
import { GastoReceita } from '../../model/gasto-receita';

@Component({
  selector: 'app-receita',
  templateUrl: './receita.page.html',
  styleUrls: ['./receita.page.scss'],
})
export class ReceitaPage implements OnInit {

  receitas: GastoReceita[] = [];

  constructor(
    private service: GastoReceitaService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.service.listar()
      .subscribe(resposta => {
        this.receitas = resposta;
        this.receitas = this.receitas.filter(gasto => gasto.tipoGasto == null)
      });
  }

  adicionar(){
    this.router.navigate(['adicionar'], { relativeTo: this.route});
  }
}
