import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-controle-erro',
  templateUrl: './controle-erro.component.html',
  styleUrls: ['./controle-erro.component.scss'],
})
export class ControleErroComponent implements OnInit {

  @Input() mensagemErro: string;
  @Input() mostrarErro: boolean;

  constructor() { }

  ngOnInit() {}

}
