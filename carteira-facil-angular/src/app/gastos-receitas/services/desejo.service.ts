import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Desejo } from '../model/desejo';

@Injectable({
  providedIn: 'root'
})
export class DesejoService {

  private readonly API = 'http://ec2-15-228-254-200.sa-east-1.compute.amazonaws.com:8080/api/desejo';

  constructor(private httpClient: HttpClient) { }

  listar(){
    return this.httpClient.get<Desejo[]>(this.API);
  }

  buscarPorId(id: number){
    return this.httpClient.get<Desejo>(`${this.API}/${id}`)
  }

  private adicionar(desejo: Desejo){
    return this.httpClient.post<Desejo>(this.API, desejo);
  }

  private atualizar(desejo: Desejo){
    return this.httpClient.put<Desejo>(`${this.API}/${desejo.id}`, desejo);
  }

  salvar(desejo: Desejo){
    if (desejo.id) {
      return this.atualizar(desejo);
    }
    return this.adicionar(desejo);
  }

  deletar(id: number){
    return this.httpClient.delete(`${this.API}/${id}`);
  }
}
