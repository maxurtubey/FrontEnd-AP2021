
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AcercaDeModelo } from '../model/acercade';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AcercadeService {

  constructor(private http: HttpClient) { }
  acercadeURL = "https://portfolio-ap2021.herokuapp.com/acercade/"
  // acercadeURL = "http://localhost:8080/acercade/"
  
  public detalle(id: number): Observable<AcercaDeModelo>{
    return this.http.get<AcercaDeModelo>(this.acercadeURL + `detalle/${id}`);
  }

  public guardar(texto: AcercaDeModelo): Observable<any> {
    return this.http.post<any>(this.acercadeURL + 'agregar', texto);
  }

  public listarAcerca(): Observable<AcercaDeModelo[]> {
    return this.http.get<AcercaDeModelo[]>(this.acercadeURL + 'lista');
  }

  public editar(id: number, text: AcercaDeModelo): Observable<any>{
    return this.http.put<any>(this.acercadeURL + `editar/${id}`, text);
  }

  public quitar(id: any): Observable<any> {
    console.log(`El id a borrar es: #${id}`);
    return this.http.delete<any>(this.acercadeURL + `borrar/${id}`);
  }

}
