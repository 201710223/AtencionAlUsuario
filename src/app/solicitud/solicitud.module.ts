import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerSolicitudComponent } from './ver-solicitud/ver-solicitud.component';
import { NuevaSolicitudComponent } from './nueva-solicitud/nueva-solicitud.component';
import { ActualizarSolicitudComponent } from './actualizar-solicitud/actualizar-solicitud.component';



@NgModule({
  declarations: [
    VerSolicitudComponent,
    NuevaSolicitudComponent,
    ActualizarSolicitudComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    VerSolicitudComponent,
    NuevaSolicitudComponent,
    ActualizarSolicitudComponent   
  ]
})
export class SolicitudModule { }
