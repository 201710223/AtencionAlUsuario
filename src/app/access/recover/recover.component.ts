import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-recover',
  templateUrl: './recover.component.html',
  styleUrls: ['./recover.component.css']
})
export class RecoverComponent implements OnInit {
  
  datos: any;

  inicializaDatos(){
    this.datos = new FormGroup({
      nombre: new FormControl('',[Validators.required, Validators.email]),
      password: new FormControl('')
    })
  }

  constructor() {
    this.inicializaDatos()
   }

  ngOnInit(): void {
  }

}
