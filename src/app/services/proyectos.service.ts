
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProyectosModelo } from '../model/proyectos';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  constructor(private http: HttpClient) { }

  // proyectosURL = "https://portfolio-ap2021.herokuapp.com/proyectos/"
  // proyectosURL = "https://portfolio-api-rest.onrender.com/proyectos/"
  // proyectosURL = "https://api-rest-urtubey.koyeb.app/proyectos/"
  proyectosURL = "http://localhost:8080/proyectos/"

  public detalle(id: number): Observable<ProyectosModelo>{
    return this.http.get<ProyectosModelo>(this.proyectosURL + `detalle/${id}`);
  }

  public guardar(proy: ProyectosModelo): Observable<any> {
    return this.http.post<any>(this.proyectosURL + 'agregar', proy);
  }

  public listarProyectos(): Observable<ProyectosModelo[]> {
    return this.http.get<ProyectosModelo[]>(this.proyectosURL + 'lista');
  }

  public editar(id: number, proyect: ProyectosModelo): Observable<any>{
    return this.http.put<any>(this.proyectosURL + `editar/${id}`, proyect);
  }

  public quitar(id: any): Observable<any> {
    console.log(`El id a borrar es: #${id}`);
    return this.http.delete<any>(this.proyectosURL + `borrar/${id}`);
  }

}
