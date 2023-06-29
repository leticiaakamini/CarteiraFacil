import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ExtratoPage } from './components/extrato/extrato.page';
import { HomePage } from './components/home/home.page';
import { AlterarDadosPage } from './components/alterar-dados/alterar-dados.page';


@NgModule({
  declarations: [
    ExtratoPage,
    HomePage,
    AlterarDadosPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeRoutingModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
