
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HabilidadesModelo } from 'src/app/model/habilidades';
import { HabilidadesService } from 'src/app/services/habilidades.service';

@Component({
  selector: 'app-agregar-habilidad',
  templateUrl: './agregar-habilidad.component.html',
  styleUrls: ['./agregar-habilidad.component.css']
})
export class AgregarHabilidadComponent implements OnInit {

  logo: string;
  descripcion: string;
  duracion: string;
  certificado: string;
  porcentaje: string;

  constructor(
    private habilidadServ: HabilidadesService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const habilidad = new HabilidadesModelo(
      this.logo,
      this.descripcion,
      this.duracion,
      this.certificado,
      this.porcentaje
    );

    this.habilidadServ.guardar(habilidad).subscribe(data => {
      this.router.navigate(['/']);
      // this.router.navigate(['listarEst']); // Devuelve al listado
    },
      err => {
        this.router.navigate(['/']);
      }
    );
  }

}
