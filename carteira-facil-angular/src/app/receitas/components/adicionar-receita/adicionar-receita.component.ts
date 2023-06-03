import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReceitaService } from '../../../gastos-receitas/services/receita.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-adicionar-receita',
  templateUrl: './adicionar-receita.component.html',
  styleUrls: ['./adicionar-receita.component.scss'],
})
export class AdicionarReceitaComponent implements OnInit {

  form: FormGroup; 

  constructor(
    private formBuilder: FormBuilder,
    private service: ReceitaService,
    private toastController: ToastController
    ) { 
    this.form = this.formBuilder.group({
      nome: [null],
      valor: [null]
    });
  }

  ngOnInit() {} 

  adicionar(){
    this.service.adicionar(this.form.value).subscribe(
      resposta => console.log(resposta)
    );

    this.salvarSucesso();
    //this.cancelar();
  }

  // cancelar(){
  //   this.location.back();
  // }

  async salvarSucesso(){
    const toast = await this.toastController.create({
      message: 'Gasto salvo com sucesso!',
      duration: 5000,
    });

    toast.present();
  }

}
