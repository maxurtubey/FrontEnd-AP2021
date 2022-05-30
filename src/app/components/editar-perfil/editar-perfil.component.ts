
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PerfilModelo } from 'src/app/model/perfil';
import { PerfilService } from 'src/app/services/perfil.service';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.css']
})
export class EditarPerfilComponent implements OnInit {

  perfilSelect: PerfilModelo;

  constructor(
    private perfilServ: PerfilService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.perfilServ.detalle(id).subscribe(data => {
      this.perfilSelect = data;
    },
      err => {
        this.router.navigate(['/']);
      }
    );
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.perfilServ.editar(id, this.perfilSelect).subscribe(data => {
      this.router.navigate(['/']);
      // this.router.navigate(['listarEst']); // Devuelve al listado
    },
      err => {
        this.router.navigate(['/']);
      }
    );
  }

}
