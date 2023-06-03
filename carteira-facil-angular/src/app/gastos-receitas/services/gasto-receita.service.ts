import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GastoReceita } from '../model/gasto-receita';

@Injectable({
  providedIn: 'root'
})
export class GastoReceitaService {

  private readonly API = 'api/gasto-receita';

  constructor(private httpClient: HttpClient) { }

  listar(){
    return this.httpClient.get<GastoReceita[]>(this.API);
  }

  buscarPorId(id: string){
    return this.httpClient.get<GastoReceita>(`${this.API}/${id}`)
  }

  salvar(gasto: GastoReceita){
    console.log(gasto);
    if (gasto.id) {
      console.log("update")
      return this.atualizar(gasto);
    }
    console.log("create")
    return this.adicionar(gasto);
  }
 
  private adicionar(gasto: GastoReceita){
    return this.httpClient.post<GastoReceita>(this.API, gasto);
  }

  private atualizar(gasto: GastoReceita){
    return this.httpClient.put<GastoReceita>(`${this.API}/${gasto.id}`, gasto);
  }

  deletar(id: number){
    return this.httpClient.delete(`${this.API}/${id}`);
  }
}
