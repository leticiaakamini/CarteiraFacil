import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlterarDadosPageRoutingModule } from './alterar-dados-routing.module';

import { AlterarDadosPage } from './alterar-dados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlterarDadosPageRoutingModule
  ],
  declarations: [AlterarDadosPage]
})
export class AlterarDadosPageModule {}
