import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchComponent } from './search/search.component';
import { LogoComponent } from './logo/logo.component';



@NgModule({
  declarations: [
    NavBarComponent,
    ProfileComponent,
    SearchComponent,
    LogoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }