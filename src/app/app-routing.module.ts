import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecoverComponent } from './access/recover/recover.component';
import { RegisterComponent } from './access/register/register.component';
import { LogoComponent } from './home/logo/logo.component';
import { VerSolicitudComponent } from './solicitud/ver-solicitud/ver-solicitud.component'
import { ActualizarSolicitudComponent } from './solicitud/actualizar-solicitud/actualizar-solicitud.component'
import { NuevaSolicitudComponent } from './solicitud/nueva-solicitud/nueva-solicitud.component'
import { UserComponent } from './login/user/user.component';

const routes: Routes = [
  { path:'register', component:RegisterComponent },
  { path:'recover', component:RecoverComponent },
  { path:'home', component:LogoComponent },
  { path:'ver-solicitud', component:VerSolicitudComponent},
  { path:'actualizar-solicitud', component:ActualizarSolicitudComponent},
  { path:'nuevasolicitud', component:NuevaSolicitudComponent},
  { path:'login', component:UserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
