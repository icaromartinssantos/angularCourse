import { PeriodicElement } from './apontamento/apontamento.component';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'

const API_URL = 'https://localhost:5001/api';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor(private httpClient: HttpClient) { }

  ConsultaTodosApontamentos()
  {

    return this.httpClient.get(`${API_URL}/Apontamento`);
  }

  InserirApontamentos(entity: PeriodicElement)
  {

    return this.httpClient.post(`${API_URL}/Apontamento`, entity);
  }
}
