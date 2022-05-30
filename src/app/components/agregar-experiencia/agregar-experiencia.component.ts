
import { Component, OnInit } from '@angular/core';
import { ExperienciaService } from 'src/app/services/experiencia.service';
import { ExperienciaModelo } from 'src/app/model/experiencia';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-experiencia',
  templateUrl: './agregar-experiencia.component.html',
  styleUrls: ['./agregar-experiencia.component.css']
})
export class AgregarExperienciaComponent implements OnInit {

  logo: string;
  empresa: string;
  empresa_nomb: string;
  puesto: string;
  jornada: string;
  tarea: string;
  anio_ingreso: string;
  anio_egreso: string;

  constructor(
    private experienciaServ: ExperienciaService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const educacion = new ExperienciaModelo(
      this.logo,
      this.empresa,
      this.empresa_nomb,
      this.puesto,
      this.jornada,
      this.tarea,
      this.anio_ingreso,
      this.anio_egreso
    );

    this.experienciaServ.guardar(educacion).subscribe(data => {
      this.router.navigate(['/']);
      // this.router.navigate(['listarEst']); // Devuelve al listado
    },
      err => {
        this.router.navigate(['/']);
      }
    );
  }

}
