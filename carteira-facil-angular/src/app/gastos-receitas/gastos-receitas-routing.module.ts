import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdicionarComponent } from './components/adicionar/adicionar.component';
import { ReceitaPage } from './components/receita/receita.page';
import { GastoPage } from './components/gasto/gasto.page';
import { ListaDesejoPage } from './components/lista-desejo/lista-desejo.page';
import { AdicionarDesejoComponent } from './components/adicionar-desejo/adicionar-desejo.component';

const routes: Routes = [
  {path: 'gasto', children: [
    {path: '', component: GastoPage},
    {path: 'adicionar', component: AdicionarComponent},
    {path: 'editar/:id', component: AdicionarComponent}
  ]},
  {path: 'receita', children: [
    {path: '', component: ReceitaPage},
    {path: 'adicionar', component: AdicionarComponent},
    {path: 'editar/:id', component: AdicionarComponent}
  ]},
  {path: 'lista-desejos', children: [
    {path: '', component: ListaDesejoPage},
    {path: 'adicionar', component: AdicionarDesejoComponent},
    {path: 'editar/:id', component: AdicionarDesejoComponent}
  ]},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GastosReceitasRoutingModule { }
