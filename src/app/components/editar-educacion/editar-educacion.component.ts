
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EstudioModelo } from 'src/app/model/estudio';
import { EducacionService } from 'src/app/services/educacion.service';

// import { NgbModal } from '@ng-bootstrap/ng-bootstrap'; // nuevo

@Component({
  selector: 'app-editar-educacion',
  templateUrl: './editar-educacion.component.html',
  styleUrls: ['./editar-educacion.component.css']
})

export class EditarEducacionComponent implements OnInit {

  estudioSelect: EstudioModelo;
  // closeResult = ''; // nuevo

  constructor(
    private estudServ: EducacionService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    // private modalService: NgbModal, // nuevo
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.estudServ.detalle(id).subscribe(data => {
      this.estudioSelect = data;
    },
      err => {
        this.router.navigate(['/']);
      }
    );
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.estudServ.editar(id, this.estudioSelect).subscribe(data => {
      this.router.navigate(['/']);
      // this.router.navigate(['listarEst']); // Devuelve al listado
    },
      err => {
        this.router.navigate(['/']);
      }
    );
  }

  // ------------------

  // open(content: any) {
  //   this.modalService.open(content, {size: 'lg', ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
  //     this.closeResult = `Closed with: ${result}`;
  //   }, (reason) => {
  //     this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  //   });
  // }

  // private getDismissReason(reason: any): string {
  //   if (reason === ModalDismissReasons.ESC) {
  //     return 'by pressing ESC';
  //   } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
  //     return 'by clicking on a backdrop';
  //   } else {
  //     return `with: ${reason}`;
  //   }
  // }

  // ------------------
}