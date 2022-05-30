
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HabilidadesModelo } from '../model/habilidades';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HabilidadesService {

  constructor(private http: HttpClient) { }

  habilidadesURL = "https://portfolio-ap2021.herokuapp.com/habilidades/"
  // habilidadesURL = "http://localhost:8080/habilidades/"

  public detalle(id: number): Observable<HabilidadesModelo>{
    return this.http.get<HabilidadesModelo>(this.habilidadesURL + `detalle/${id}`);
  }

  public guardar(habilidad: HabilidadesModelo): Observable<any> {
    return this.http.post<any>(this.habilidadesURL + 'agregar', habilidad);
  }

  public listarHabilidades(): Observable<HabilidadesModelo[]> {
    return this.http.get<HabilidadesModelo[]>(this.habilidadesURL + 'lista');
  }

  public editar(id: number, habil: HabilidadesModelo): Observable<any>{
    return this.http.put<any>(this.habilidadesURL + `editar/${id}`, habil);
  }

  public quitar(id: any): Observable<any> {
    console.log(`El id a borrar es: #${id}`);
    return this.http.delete<any>(this.habilidadesURL + `borrar/${id}`);
  }
  
}
