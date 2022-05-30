
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarAcercadeComponent } from './components/listar-acercade/listar-acercade.component';
import { AgregarEducacionComponent } from './components/agregar-educacion/agregar-educacion.component';
import { EditarEducacionComponent } from './components/editar-educacion/editar-educacion.component';
import { ListarExperienciaComponent } from './components/listar-experiencia/listar-experiencia.component';
import { AgregarExperienciaComponent } from './components/agregar-experiencia/agregar-experiencia.component';
import { EditarExperienciaComponent } from './components/editar-experiencia/editar-experiencia.component';
import { ListarPortfolioComponent } from './components/listar-portfolio/listar-portfolio.component';
import { EditarAcercadeComponent } from './components/editar-acercade/editar-acercade.component';
import { EditarPerfilComponent } from './components/editar-perfil/editar-perfil.component';
import { IniciarsesionComponent } from './components/iniciarsesion/iniciarsesion.component';
import { EditarHabilidadesComponent } from './components/editar-habilidades/editar-habilidades.component';
import { AgregarHabilidadComponent } from './components/agregar-habilidad/agregar-habilidad.component';
import { GuardGuard } from './services/guard.guard';
import { EditarProyectosComponent } from './components/editar-proyectos/editar-proyectos.component';
import { AgregarProyectoComponent } from './components/agregar-proyecto/agregar-proyecto.component';

const routes: Routes = [
  {path: '', component: ListarPortfolioComponent},
  {path: 'iniciarSesion', component: IniciarsesionComponent},
  {path: 'editarPerf/:id', component: EditarPerfilComponent, canActivate:[GuardGuard]},
  {path: 'listarAcerca', component: ListarAcercadeComponent},
  {path: 'editarAcerca/:id', component: EditarAcercadeComponent, canActivate:[GuardGuard]},
  {path: 'agregarEst', component: AgregarEducacionComponent, canActivate:[GuardGuard]},
  {path: 'editarEst/:id', component: EditarEducacionComponent, canActivate:[GuardGuard]},
  {path: 'listarExp', component: ListarExperienciaComponent},
  {path: 'agregarExp', component: AgregarExperienciaComponent, canActivate:[GuardGuard]},
  {path: 'editarExp/:id', component: EditarExperienciaComponent, canActivate:[GuardGuard]},
  {path: 'editarHab/:id', component: EditarHabilidadesComponent, canActivate:[GuardGuard]},
  {path: 'agregarHabilidad', component: AgregarHabilidadComponent, canActivate:[GuardGuard]},
  {path: 'editarProy/:id', component: EditarProyectosComponent, canActivate:[GuardGuard]},
  {path: 'agregarProyecto', component: AgregarProyectoComponent, canActivate:[GuardGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }