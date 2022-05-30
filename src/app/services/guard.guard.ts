import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AutenticacionService } from './autenticacion.service';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {

  isLoggedIn: Observable<boolean>; // netbasal

  constructor(private autenticacionServicio: AutenticacionService, private ruta: Router) {
    this.isLoggedIn = autenticacionServicio.isLoggedIn(); // netbasal
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let logueado = this.autenticacionServicio.isLoginSubject;
    if (logueado.value) {
      return true;
    } else {
      this.ruta.navigate(['iniciarSesion']);
      return false;
    }
  }

}
