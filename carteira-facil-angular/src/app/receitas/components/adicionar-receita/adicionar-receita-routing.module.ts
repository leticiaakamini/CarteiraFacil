import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdicionarReceitaComponent } from './adicionar-receita.component';

const routes: Routes = [
  {
    path: '',
    component: AdicionarReceitaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdicionarReceitaRoutingModule { }
