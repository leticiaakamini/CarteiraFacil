import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-lista-desejo',
  templateUrl: './lista-desejo.page.html',
  styleUrls: ['./lista-desejo.page.scss'],
})
export class ListaDesejoPage implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  adicionar() {
    this.router.navigate(['adicionar'], { relativeTo: this.route });
  }

}
