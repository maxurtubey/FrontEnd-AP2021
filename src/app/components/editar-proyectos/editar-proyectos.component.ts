
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProyectosModelo } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/services/proyectos.service';

@Component({
  selector: 'app-editar-proyectos',
  templateUrl: './editar-proyectos.component.html',
  styleUrls: ['./editar-proyectos.component.css']
})

export class EditarProyectosComponent implements OnInit {

  proyectoSelect: ProyectosModelo;

  constructor(
    private proyectosServ: ProyectosService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.proyectosServ.detalle(id).subscribe(data => {
      this.proyectoSelect = data;
    },
      err => {
        console.log(err);
        this.router.navigate(['/']);
      }
    );
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.proyectosServ.editar(id, this.proyectoSelect).subscribe(data => {
      this.router.navigate(['/']);
    },
      err => {
        console.log(err);
        this.router.navigate(['/']);
      }
    );
  }

}
