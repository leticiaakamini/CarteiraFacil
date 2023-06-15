import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GastosReceitasRoutingModule } from './gastos-receitas-routing.module';
import { ReceitaPage } from './components/receita/receita.page';
import { GastoPage } from './components/gasto/gasto.page';
import { AdicionarComponent } from './components/adicionar/adicionar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../shared/shared.module';
import { ListaDesejoPage } from './components/lista-desejo/lista-desejo.page';
import { AdicionarDesejoComponent } from './components/adicionar-desejo/adicionar-desejo.component';

@NgModule({
  declarations: [
    ReceitaPage,
    GastoPage,
    AdicionarComponent,
    ListaDesejoPage,
    AdicionarDesejoComponent
  ],
  imports: [
    CommonModule,
    GastosReceitasRoutingModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class GastosReceitasModule { }
