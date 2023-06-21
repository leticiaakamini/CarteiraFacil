import { Directive, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Directive({
  selector: '[appFormBase]'
})
export abstract class FormBaseDirective implements OnInit{

  form: FormGroup;

  constructor() { }

  ngOnInit() {}  

  verificaValidTouched(campo: string){
    return (
      !this.form.get(campo).valid &&
      (this.form.get(campo).touched || this.form.get(campo).dirty)
    );
  }

  verificaSenha(senha: string){
    return (
      !this.form.get(senha).valid &&
      (this.form.get(senha).touched && this.form.get(senha).dirty)
    );
  }

  aplicaCssErro(campo: string){
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    };
  }
}
