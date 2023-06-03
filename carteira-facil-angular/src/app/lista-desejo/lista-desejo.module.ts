import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaDesejoPageRoutingModule } from './lista-desejo-routing.module';

import { ListaDesejoPage } from './lista-desejo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaDesejoPageRoutingModule
  ],
  declarations: [ListaDesejoPage]
})
export class ListaDesejoPageModule {}
