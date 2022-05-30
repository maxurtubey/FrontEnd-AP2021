
import { Component, OnInit } from '@angular/core';
import { EstudioModelo } from 'src/app/model/estudio';
import { EducacionService } from 'src/app/services/educacion.service';
import { EditarEducacionComponent } from '../editar-educacion/editar-educacion.component';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listar-educacion',
  templateUrl: './listar-educacion.component.html',
  styleUrls: ['./listar-educacion.component.css']
})

export class ListarEducacionComponent implements OnInit {

  estudiosArr: EstudioModelo[] = [];
  // editarEst: EditarEducacionComponent;
  isLoggedIn: Observable<boolean>; // netbasal

  constructor(private educacionServ: EducacionService, public autenticacionService: AutenticacionService) {
    this.isLoggedIn = autenticacionService.isLoggedIn(); // netbasal
  }

  ngOnInit() {
    this.cargarEstudios();
  }

  cargarEstudios(): void {
    this.educacionServ.listarEstudios().subscribe(data => {
      this.estudiosArr = data;
    },
      err => {
        console.log(err);
      }
    );
  }

  borrar(id: any) {
    this.educacionServ.quitar(id).subscribe(data => {
      this.cargarEstudios();
    },
      err => {
      }
    );
  }

}