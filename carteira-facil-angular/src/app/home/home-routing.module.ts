import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExtratoPage } from './components/extrato/extrato.page';
import { HomePage } from './components/home/home.page';
import { AlterarDadosPage } from './components/alterar-dados/alterar-dados.page';

const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'extrato', component: ExtratoPage },
  { path: 'alterar-dados', component: AlterarDadosPage }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
