import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './guards/auth-guard.service';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'esqueceu-senha',
    loadChildren: () => import('./esqueceu-senha/esqueceu-senha.module').then( m => m.EsqueceuSenhaPageModule)
  },
  {
    path: 'principal',
    loadChildren: () => import('./principal/principal.module').then( m => m.PrincipalPageModule),
    //canActivate: [AuthGuardService]
  },
  {
    path: 'configuracoes',
    loadChildren: () => import('./configuracoes/configuracoes.module').then( m => m.ConfiguracoesPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'alterar-dados',
    loadChildren: () => import('./alterar-dados/alterar-dados.module').then( m => m.AlterarDadosPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'extrato',
    loadChildren: () => import('./extrato/extrato.module').then( m => m.ExtratoPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'gasto',
    loadChildren: () => import('./gastos-receitas/gastos-receitas.module').then( m => m.GastosReceitasModule),
    //canActivate: [AuthGuardService]
  },
  {
    path: 'lista-desejo',
    loadChildren: () => import('./lista-desejo/lista-desejo.module').then( m => m.ListaDesejoPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'receita',
    loadChildren: () => import('./gastos-receitas/gastos-receitas.module').then( m => m.GastosReceitasModule),
    //canActivate: [AuthGuardService]
  },
  // {
  //   path: 'adicionar',
  //   loadChildren: () => import('./gastos-receitas/gastos-receitas.module').then( m => m.GastosReceitasModule),
  //   //canActivate: [AuthGuardService]
  // },
  // {
  //   path: 'adicionar-receita',
  //   loadChildren: () => import('./receitas/components/adicionar-receita/adicionar-receita.module').then( m => m.AdicionarReceitaModule),
  //   //canActivate: [AuthGuardService]
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }