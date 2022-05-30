
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExperienciaModelo } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/services/experiencia.service';

@Component({
  selector: 'app-editar-experiencia',
  templateUrl: './editar-experiencia.component.html',
  styleUrls: ['./editar-experiencia.component.css']
})
export class EditarExperienciaComponent implements OnInit {

  experienciaSelect: ExperienciaModelo;

  constructor(
    private experServ: ExperienciaService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.experServ.detalle(id).subscribe(data => {
      this.experienciaSelect = data;
    },
      err => {
        this.router.navigate(['/']);
      }
    );
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.experServ.editar(id, this.experienciaSelect).subscribe(data => {
      this.router.navigate(['/']);
    },
      err => {
        this.router.navigate(['/']);
      }
    );
  }
}
