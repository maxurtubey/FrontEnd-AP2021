
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PerfilModelo } from '../model/perfil';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  constructor(private http: HttpClient) { }

  perfilURL = "https://portfolio-ap2021.herokuapp.com/perfil/"
  // perfilURL = "http://localhost:8080/perfil/"

  public detalle(id: number): Observable<PerfilModelo> {
    return this.http.get<PerfilModelo>(this.perfilURL + `detalle/${id}`);
  }

  public guardar(trabajo: PerfilModelo): Observable<any> {
    return this.http.post<any>(this.perfilURL + 'agregar', trabajo);
  }

  public listarPerfil(): Observable<PerfilModelo[]> {
    return this.http.get<PerfilModelo[]>(this.perfilURL + 'lista');
  }

  public editar(id: number, job: PerfilModelo): Observable<any> {
    return this.http.put<any>(this.perfilURL + `editar/${id}`, job);
  }

}
