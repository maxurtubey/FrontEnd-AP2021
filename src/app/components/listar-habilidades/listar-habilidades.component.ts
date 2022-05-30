import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
import { HabilidadesService } from 'src/app/services/habilidades.service';
import { HabilidadesModelo } from 'src/app/model/habilidades';

@Component({
  selector: 'app-listar-habilidades',
  templateUrl: './listar-habilidades.component.html',
  styleUrls: ['./listar-habilidades.component.css']
})
export class ListarHabilidadesComponent implements OnInit {

  habilidadesArr: HabilidadesModelo[] = [];
  isLoggedIn: Observable<boolean>; // netbasal

  constructor(private habilidadesServ: HabilidadesService, public autenticacionService: AutenticacionService) {
    this.isLoggedIn = autenticacionService.isLoggedIn(); // netbasal
  }

  ngOnInit() {
    this.cargarHabilidades();
  }

  cargarHabilidades(): void {
    this.habilidadesServ.listarHabilidades().subscribe(data => {
      // console.log("Datos experiencia:" + JSON.stringify(data)); //MC8
      // this.miExperiencia = data[0]; //MC8
      this.habilidadesArr = data;
    },
      err => {
        console.log(err);
      }
    );
  }

  borrar(id: any) {
    this.habilidadesServ.quitar(id).subscribe(data => {
      this.cargarHabilidades();
    },
      err => {
        console.log(err);
      }
    );
  }

  convertir(num: string) {
    return Number(num);
  } 

}
