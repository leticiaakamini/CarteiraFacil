import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdicionarReceitaRoutingModule } from './adicionar-receita-routing.module';
import { AdicionarReceitaComponent } from './adicionar-receita.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [AdicionarReceitaComponent],
  imports: [
    CommonModule,
    AdicionarReceitaRoutingModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule
  ]
})
export class AdicionarReceitaModule { } 
