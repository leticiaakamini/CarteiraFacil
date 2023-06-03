import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CadastroService } from './services/cadastro.service';
import { ValidacoesForm } from '../shared/validacoes-form';
import { FormBaseDirective } from '../shared/form-base/form-base.directive';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage extends FormBaseDirective implements OnInit {

  //form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: CadastroService
  ) { 
    super();
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', ValidacoesForm.telefoneValidator],
      senha: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]],
      confirmarSenha: ['', [Validators.required, ValidacoesForm.igualA('senha')]]
    }); 
  }

  onSubmit(){
    console.log(this.form)
  }

  adicionar(){
    this.service.adicionar(this.form.value).subscribe(
      resposta => console.log(resposta)
    );
  }

  verificaTelefone(telefone: string){
    return !this.form.get(telefone).valid;
  }
}
