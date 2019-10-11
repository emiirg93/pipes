import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  transform(value: string, activo:boolean = true): any {
    
    let password:string = "";
    let cantidadLetras:number;

    if(activo){
      cantidadLetras = value.length;
      
      for (let index = 0; index < cantidadLetras; index++) {
        password +='*';
      }
    }else{
      password = value;
    }

    return password;
  }

  
}
