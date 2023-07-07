import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControleErroComponent } from './controle-erro/controle-erro.component';
import { MensagemErroComponent } from './mensagem-erro/mensagem-erro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    ControleErroComponent,
    MensagemErroComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule
  ],
  exports: [
    ControleErroComponent,
    MensagemErroComponent
  ]
})
export class SharedModule { }
