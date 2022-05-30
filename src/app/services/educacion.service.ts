
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EstudioModelo } from '../model/estudio';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  constructor(private http: HttpClient) { }

  estudiosURL = "https://portfolio-ap2021.herokuapp.com/estudios/"
  // estudiosURL = "http://localhost:8080/estudios/"

  public detalle(id: number): Observable<EstudioModelo>{
    return this.http.get<EstudioModelo>(this.estudiosURL + `detalle/${id}`);
  }

  public guardar(educacion: EstudioModelo): Observable<any> {
    return this.http.post<any>(this.estudiosURL + 'agregar', educacion);
  }

  public listarEstudios(): Observable<EstudioModelo[]> {
    return this.http.get<EstudioModelo[]>(this.estudiosURL + 'lista');
  }

  public editar(id: number, estud: EstudioModelo): Observable<any>{
    return this.http.put<any>(this.estudiosURL + `editar/${id}`, estud);
  }

  public quitar(id: any): Observable<any> {
    console.log(`El id a borrar es: #${id}`);
    return this.http.delete<any>(this.estudiosURL + `borrar/${id}`);
  }

}