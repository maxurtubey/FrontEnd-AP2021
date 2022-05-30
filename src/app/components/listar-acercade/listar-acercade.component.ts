
import { Component, OnInit } from '@angular/core';
import { AcercaDeModelo } from 'src/app/model/acercade';
import { AcercadeService } from 'src/app/services/acercade.service';
import { EditarAcercadeComponent } from '../editar-acercade/editar-acercade.component';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listar-acercade',
  templateUrl: './listar-acercade.component.html',
  styleUrls: ['./listar-acercade.component.css']
})
export class ListarAcercadeComponent implements OnInit {

  acercaDeArr: AcercaDeModelo[] = [];
  editarAcerca: EditarAcercadeComponent;
  isLoggedIn: Observable<boolean>; // netbasal

  constructor(private aceraDeServ: AcercadeService, public autenticacionService: AutenticacionService) {
    this.isLoggedIn = autenticacionService.isLoggedIn(); // netbasal
  }

  ngOnInit() {
    this.cargarAcercaDe();
  }

  cargarAcercaDe(): void {
    this.aceraDeServ.listarAcerca().subscribe(data => {
      this.acercaDeArr = data;
    },
      err => {
        console.log(err);
      }
    );
  }

  borrar(id: any) {
    this.aceraDeServ.quitar(id).subscribe(data => {
      this.cargarAcercaDe();
    },
      err => {
      }
    );
  }
}
