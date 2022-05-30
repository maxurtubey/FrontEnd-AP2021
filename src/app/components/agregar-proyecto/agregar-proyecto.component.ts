
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProyectosModelo } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/services/proyectos.service';

@Component({
  selector: 'app-agregar-proyecto',
  templateUrl: './agregar-proyecto.component.html',
  styleUrls: ['./agregar-proyecto.component.css']
})
export class AgregarProyectoComponent implements OnInit {

  logo: string;
  titulo: string;
  tecnologias: string;
  descripcion: string;
  year: string;
  link: string;

  constructor(
    private proyectoServ: ProyectosService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const proyecto = new ProyectosModelo(
      this.logo,
      this.titulo,
      this.tecnologias,
      this.descripcion,
      this.year,
      this.link,
    );

    this.proyectoServ.guardar(proyecto).subscribe(data => {
      this.router.navigate(['/']);
      // this.router.navigate(['listarEst']); // Devuelve al listado
    },
      err => {
        this.router.navigate(['/']);
      }
    );
  }

}
