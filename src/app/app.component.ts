import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';

  nombre:string = 'Emiliano';

  nombre2:string = 'EmIlIaNo MiGuEl RaGo Y FERnanDez'

  arreglo:number[]= [0,1,2,3,4,5,6,7];

  PI = Math.PI;

  a:number = 0.234;

  salario:number = 1234.5;

  heroe = {
    nombre:'Logan',
    clave:'Wolverine',
    edad:500,
    direccion:{
      calle:"falsa",
      numero:123
    }
  }

  valorDePromesa = new Promise((resolve,reject)=>{
    setTimeout(() =>resolve("Llego la data!"), 3500);
  })

  fecha = new Date();

  video = 'XoYu7K6Ywkg';

  clave:string = "pepito123";
  activar:boolean = true;

}
