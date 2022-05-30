
import { Component, OnInit } from '@angular/core';
import { ExperienciaModelo } from 'src/app/model/experiencia';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
import { ExperienciaService } from 'src/app/services/experiencia.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listar-experiencia',
  templateUrl: './listar-experiencia.component.html',
  styleUrls: ['./listar-experiencia.component.css']
})
export class ListarExperienciaComponent implements OnInit {

  experienciaArr: ExperienciaModelo[] = [];
  isLoggedIn: Observable<boolean>; // netbasal
  // miExperiencia: any;

  constructor(private experienciaServ: ExperienciaService, public autenticacionService: AutenticacionService) {
    this.isLoggedIn = autenticacionService.isLoggedIn(); // netbasal
  }

  ngOnInit() {
    this.cargarExperiencia();
  }

  cargarExperiencia(): void {
    this.experienciaServ.listarExperiencia().subscribe(data => {
      // console.log("Datos experiencia:" + JSON.stringify(data)); //MC8
      // this.miExperiencia = data[0]; //MC8
      this.experienciaArr = data;
    },
      err => {
        console.log(err);
      }
    );
  }

  borrar(id: any) {
    this.experienciaServ.quitar(id).subscribe(data => {
      this.cargarExperiencia();
    },
      err => {
        console.log(err);
      }
    );
  }

}
