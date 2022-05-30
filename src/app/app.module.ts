
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// NgBootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// Componentes
import { ListarPortfolioComponent } from './components/listar-portfolio/listar-portfolio.component';
import { ListarPerfilComponent } from './components/listar-perfil/listar-perfil.component';
import { EditarPerfilComponent } from './components/editar-perfil/editar-perfil.component';
import { ListarAcercadeComponent } from './components/listar-acercade/listar-acercade.component';
import { EditarAcercadeComponent } from './components/editar-acercade/editar-acercade.component';
import { ListarEducacionComponent } from './components/listar-educacion/listar-educacion.component';
import { EditarEducacionComponent } from './components/editar-educacion/editar-educacion.component';
import { AgregarEducacionComponent } from './components/agregar-educacion/agregar-educacion.component';
import { ListarExperienciaComponent } from './components/listar-experiencia/listar-experiencia.component';
import { EditarExperienciaComponent } from './components/editar-experiencia/editar-experiencia.component';
import { AgregarExperienciaComponent } from './components/agregar-experiencia/agregar-experiencia.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IniciarsesionComponent } from './components/iniciarsesion/iniciarsesion.component';
import { EducacionService } from './services/educacion.service';
import { InterceptorService } from './services/interceptor.service';
import { ListarHabilidadesComponent } from './components/listar-habilidades/listar-habilidades.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { EditarHabilidadesComponent } from './components/editar-habilidades/editar-habilidades.component';
import { AgregarHabilidadComponent } from './components/agregar-habilidad/agregar-habilidad.component';
import { ListarProyectosComponent } from './components/listar-proyectos/listar-proyectos.component';
import { EditarProyectosComponent } from './components/editar-proyectos/editar-proyectos.component';
import { AgregarProyectoComponent } from './components/agregar-proyecto/agregar-proyecto.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarPortfolioComponent,
    ListarPerfilComponent,
    EditarPerfilComponent,
    ListarAcercadeComponent,
    EditarAcercadeComponent,
    ListarEducacionComponent,
    EditarEducacionComponent,
    AgregarEducacionComponent,
    ListarExperienciaComponent,
    EditarExperienciaComponent,
    AgregarExperienciaComponent,
    NavbarComponent,
    IniciarsesionComponent,
    ListarHabilidadesComponent,
    EditarHabilidadesComponent,
    AgregarHabilidadComponent,
    ListarProyectosComponent,
    EditarProyectosComponent,
    AgregarProyectoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgCircleProgressModule.forRoot({}),
  ],
  providers: [EducacionService,
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }