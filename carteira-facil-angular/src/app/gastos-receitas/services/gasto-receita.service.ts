import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GastoReceita } from '../model/gasto-receita';

@Injectable({
  providedIn: 'root'
})
export class GastoReceitaService {

  private readonly API = 'http://ec2-15-228-254-200.sa-east-1.compute.amazonaws.com:8080/api/gasto-receita';

  constructor(private httpClient: HttpClient) { }

  listar(){
    return this.httpClient.get<GastoReceita[]>(this.API);
  }

  buscarPorId(id: number){
    return this.httpClient.get<GastoReceita>(`${this.API}/${id}`)
  }

  salvar(gastoReceita: GastoReceita){
    if (gastoReceita.id) {
      return this.atualizar(gastoReceita);
    }
    return this.adicionar(gastoReceita);
  }
 
  private adicionar(gastoReceita: GastoReceita){
    return this.httpClient.post<GastoReceita>(this.API, gastoReceita);
  }

  private atualizar(gastoReceita: GastoReceita){
    return this.httpClient.put<GastoReceita>(`${this.API}/${gastoReceita.id}`, gastoReceita);
  }

  deletar(id: number){
    return this.httpClient.delete(`${this.API}/${id}`);
  }
}
