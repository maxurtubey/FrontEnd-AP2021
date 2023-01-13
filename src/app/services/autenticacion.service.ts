
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  // url = "https://portfolio-jwt.herokuapp.com/autenticacion";
  // url = "https://portfolio-login.onrender.com/autenticacion";
  // url = "https://autenticacion-urtubey.koyeb.app/autenticacion";
  url = "http://localhost:9090/autenticacion";

  currentUserSubject: BehaviorSubject<any>;
  isLoginSubject = new BehaviorSubject<boolean>(this.tieneToken());

  constructor(private http: HttpClient) {
    // console.log("El servicio de autenticación está corriendo");
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('token') || '{}'))
  }

  iniciarSesion(credenciales: any): Observable<any> {
    return this.http.post(this.url, credenciales).pipe(map(data => {
      sessionStorage.setItem('token', JSON.stringify(data)); // <-- Acá está el chiste
      this.currentUserSubject.next(data);
      // localStorage.setItem('token', JSON.stringify(data));
      this.isLoginSubject.next(true);
      return data;
    }))
  }

  get UsuarioAutenticado() {
    return this.currentUserSubject.value;
  }

  private tieneToken() : boolean {
    return !!sessionStorage.getItem('token');
  }
 
  cerrarSesion() : void {
    sessionStorage.removeItem('token');
    this.isLoginSubject.next(false);
  }

  isLoggedIn() : Observable<boolean> {
    return this.isLoginSubject.asObservable();
   }

}
