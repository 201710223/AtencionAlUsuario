import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccessRoutingModule } from './access-routing.module';
import { RegisterComponent } from './register/register.component';
import { RecoverComponent } from './recover/recover.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RegisterComponent,
    RecoverComponent
  ],
  imports: [
    CommonModule,
    AccessRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    RegisterComponent,
    RecoverComponent
  ]
})
export class AccessModule { }
