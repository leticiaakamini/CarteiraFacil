import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlterarDadosPage } from './alterar-dados.page';

const routes: Routes = [
  {
    path: '',
    component: AlterarDadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlterarDadosPageRoutingModule {}
