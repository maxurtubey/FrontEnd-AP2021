
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ExperienciaModelo } from '../model/experiencia';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  constructor(private http: HttpClient) { }

  // experienciaURL = "https://portfolio-ap2021.herokuapp.com/experiencia/"
  // experienciaURL = "https://portfolio-api-rest.onrender.com/experiencia/"
  // experienciaURL = "https://api-rest-urtubey.koyeb.app/experiencia/"
  experienciaURL = "http://localhost:8080/experiencia/"

  public detalle(id: number): Observable<ExperienciaModelo>{
    return this.http.get<ExperienciaModelo>(this.experienciaURL + `detalle/${id}`);
  }

  public guardar(trabajo: ExperienciaModelo): Observable<any> {
    return this.http.post<any>(this.experienciaURL + 'agregar', trabajo);
  }

  public listarExperiencia(): Observable<ExperienciaModelo[]> {
    return this.http.get<ExperienciaModelo[]>(this.experienciaURL + 'lista');
  }

  public editar(id: number, job: ExperienciaModelo): Observable<any>{
    return this.http.put<any>(this.experienciaURL + `editar/${id}`, job);
  }

  public quitar(id: any): Observable<any> {
    console.log(`El id a borrar es: #${id}`);
    return this.http.delete<any>(this.experienciaURL + `borrar/${id}`);
  }

}
