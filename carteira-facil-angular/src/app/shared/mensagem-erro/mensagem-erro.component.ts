import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ValidacoesForm } from '../validacoes-form';

@Component({
  selector: 'app-mensagem-erro',
  templateUrl: './mensagem-erro.component.html',
  styleUrls: ['./mensagem-erro.component.scss'],
})
export class MensagemErroComponent implements OnInit {

  @Input() control: FormControl;
  @Input() label: string;

  constructor() { }

  ngOnInit() {}

  get mensagemErro(){
    for(const propertyName in this.control.errors){
      if(this.control.errors.hasOwnProperty(propertyName) &&
        this.control.touched) {
          return ValidacoesForm.getMensagemErro(this.label, propertyName, this.control.errors[propertyName]);
        }
    }

    return null;
  }

}
