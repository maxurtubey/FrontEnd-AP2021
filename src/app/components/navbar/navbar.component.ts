import { Component, OnInit } from '@angular/core';
// import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  closeResult!: string;
  formulario: FormGroup;
  isLoggedIn: Observable<boolean>; // netbasal

  constructor(
    // private modalService: NgbModal,
    private formBuilder: FormBuilder,
    private router: Router,
    public autenticacionService: AutenticacionService,
  ) {
    this.formulario = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      clave: ['', [Validators.required, Validators.minLength(8)]],
    });
    this.isLoggedIn = autenticacionService.isLoggedIn(); // netbasal
  }

  ngOnInit(): void { }

  // open(content: any) {
  //   this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
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

  get Nombre() {
    return this.formulario.get("nombre");
  }
  get Clave() {
    return this.formulario.get("clave");
  }

  get PasswordValid() {
    return this.Clave?.touched && !this.Clave?.valid;
  }

  onEnviar(event: Event) {
    // Detenemos la propagación o ejecución del comportamiento submit de un form
    event.preventDefault;
    this.autenticacionService.iniciarSesion(this.formulario.value).subscribe(data => {
      console.log("DATA" + JSON.stringify(data)); //MC8(2)
      this.router.navigate(['listarExp']); //MC8(2)
    })

    if (this.formulario.valid) {
      // Llamamos a nuestro servicio para enviar los datos al servidor
      // También podríamos ejecutar alguna lógica extra
      alert("Todo OK ¡Se envió el formuario!")
    } else {
      // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template     
      this.formulario.markAllAsTouched();
    }

  }

}
