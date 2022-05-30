import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/services/autenticacion.service';

@Component({
  selector: 'app-iniciarsesion',
  templateUrl: './iniciarsesion.component.html',
  styleUrls: ['./iniciarsesion.component.css']
})

export class IniciarsesionComponent implements OnInit {

  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder, private autenticacionServicio: AutenticacionService, private ruta: Router) {
    this.formulario = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    })
  }

  ngOnInit(): void {
  }

  get Usuario() {
    return this.formulario.get('username');
  }

  get Clave() {
    return this.formulario.get('password');
  }

  onEnviar(evento: Event) {
    evento.preventDefault;
    this.autenticacionServicio.iniciarSesion(this.formulario.value).subscribe(data => {
      // console.log("DATA:" + JSON.stringify(data));
      this.ruta.navigate(['']);
    })
  }

}
