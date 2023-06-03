import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdicionarComponent } from './components/adicionar/adicionar.component';
import { ReceitaPage } from './components/receita/receita.page';
import { GastoPage } from './components/gasto/gasto.page';

const routes: Routes = [
  {path: '', component: GastoPage},
  {path: 'receita', component: ReceitaPage},
  {path: 'adicionar', component: AdicionarComponent},
  {path: 'editar/:id', component: AdicionarComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GastosReceitasRoutingModule { }
