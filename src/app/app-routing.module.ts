import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecoverComponent } from './access/recover/recover.component';
import { RegisterComponent } from './access/register/register.component';
import { LogoComponent } from './home/logo/logo.component';

const routes: Routes = [
  { path:'register', component:RegisterComponent },
  { path:'recover', component:RecoverComponent },
  { path:'home', component:LogoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
