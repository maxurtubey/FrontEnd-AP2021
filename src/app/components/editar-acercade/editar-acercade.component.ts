
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AcercaDeModelo } from 'src/app/model/acercade';
import { AcercadeService } from 'src/app/services/acercade.service';

@Component({
  selector: 'app-editar-acercade',
  templateUrl: './editar-acercade.component.html',
  styleUrls: ['./editar-acercade.component.css']
})
export class EditarAcercadeComponent implements OnInit {

  acercaDeSelect: AcercaDeModelo;
  
  constructor(private acercaDeServ: AcercadeService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.acercaDeServ.detalle(id).subscribe(data => {
      this.acercaDeSelect = data;
    },
      err => {
        console.log(err);
        this.router.navigate(['/']);
      }
    );
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.acercaDeServ.editar(id, this.acercaDeSelect).subscribe(data => {
      this.router.navigate(['/']);
    },
      err => {
        this.router.navigate(['/']);
      }
    );
  }

}
