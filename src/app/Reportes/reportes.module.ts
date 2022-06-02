import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatosComponent } from './datos/datos.component';
import { DescripcionProblemaComponent } from './descripcion-problema/descripcion-problema.component';



@NgModule({
  declarations: [
    DatosComponent,
    DescripcionProblemaComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class ReportesModule { }
