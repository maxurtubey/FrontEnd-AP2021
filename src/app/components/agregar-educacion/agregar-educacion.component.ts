
import { Component, OnInit } from '@angular/core';
import { EducacionService } from 'src/app/services/educacion.service';
import { EstudioModelo } from 'src/app/model/estudio';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-educacion',
  templateUrl: './agregar-educacion.component.html',
  styleUrls: ['./agregar-educacion.component.css']
})
export class AgregarEducacionComponent implements OnInit {

  logo: string;
  centro: string;
  centro_nombre: string;
  titulo: string;
  anio_ingreso: string;
  anio_egreso: string;

  constructor(
    private estudiosService: EducacionService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const educacion = new EstudioModelo(this.logo, this.centro, this.centro_nombre, this.titulo, this.anio_ingreso, this.anio_egreso);
    this.estudiosService.guardar(educacion).subscribe(data => {
      this.router.navigate(['/']);
    },
      err => {
        this.router.navigate(['/']);
      }
    );
  }
}
