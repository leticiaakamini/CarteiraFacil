import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaDesejoPage } from './lista-desejo.page';

const routes: Routes = [
  {
    path: '',
    component: ListaDesejoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaDesejoPageRoutingModule {}
