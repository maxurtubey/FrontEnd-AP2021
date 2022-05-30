
import { Component, OnInit } from '@angular/core';
import { PerfilModelo } from 'src/app/model/perfil';
import { PerfilService } from 'src/app/services/perfil.service';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listar-perfil',
  templateUrl: './listar-perfil.component.html',
  styleUrls: ['./listar-perfil.component.css']
})
export class ListarPerfilComponent implements OnInit {

  perfilArr: PerfilModelo[] = [];
  isLoggedIn: Observable<boolean>; // netbasal

  constructor(private perfilServ: PerfilService, public autenticacionService: AutenticacionService) {
    this.isLoggedIn = autenticacionService.isLoggedIn(); // netbasal
  }

  ngOnInit() {
    this.cargarPerfil();
  }

  cargarPerfil(): void {
    this.perfilServ.listarPerfil().subscribe(data => {
      this.perfilArr = data;
    },
      err => {
        console.log(err);
      }
    );
  }

}
