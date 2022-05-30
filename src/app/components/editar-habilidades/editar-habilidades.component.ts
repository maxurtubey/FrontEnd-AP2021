
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HabilidadesModelo } from 'src/app/model/habilidades';
import { HabilidadesService } from 'src/app/services/habilidades.service';

@Component({
  selector: 'app-editar-habilidades',
  templateUrl: './editar-habilidades.component.html',
  styleUrls: ['./editar-habilidades.component.css']
})

export class EditarHabilidadesComponent implements OnInit {

  habilidadesSelect: HabilidadesModelo;

  constructor(
    private habilidadesServ: HabilidadesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.habilidadesServ.detalle(id).subscribe(data => {
      this.habilidadesSelect = data;
    },
      err => {
        console.log(err);
        this.router.navigate(['/']);
      }
    );
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.habilidadesServ.editar(id, this.habilidadesSelect).subscribe(data => {
      this.router.navigate(['/']);
    },
      err => {
        console.log(err);
        this.router.navigate(['/']);
      }
    );
  }

}
