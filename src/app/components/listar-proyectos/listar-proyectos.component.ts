import { Component, OnInit } from '@angular/core';
import { ProyectosService } from 'src/app/services/proyectos.service';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
import { ProyectosModelo } from 'src/app/model/proyectos';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listar-proyectos',
  templateUrl: './listar-proyectos.component.html',
  styleUrls: ['./listar-proyectos.component.css']
})
export class ListarProyectosComponent implements OnInit {

  proyectosArr: ProyectosModelo[] = [];
  isLoggedIn: Observable<boolean>; // netbasal

  constructor(private proyectosServ: ProyectosService, public autenticacionService: AutenticacionService) {
    this.isLoggedIn = autenticacionService.isLoggedIn(); // netbasal
  }
    
  // ngOnInit(): void { }

  ngOnInit() {
    this.cargarProyectos();
  }

  cargarProyectos(): void {
    this.proyectosServ.listarProyectos().subscribe(data => {
      // console.log("Datos experiencia:" + JSON.stringify(data)); //MC8
      // this.miExperiencia = data[0]; //MC8
      this.proyectosArr = data;
    },
      err => {
        console.log(err);
      }
    );
  }

  borrar(id: any) {
    this.proyectosServ.quitar(id).subscribe(data => {
      this.cargarProyectos();
    },
      err => {
        console.log(err);
      }
    );
  }

}
