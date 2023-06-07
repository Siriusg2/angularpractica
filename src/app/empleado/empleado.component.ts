import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-empleado',
templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.scss']
 // styles : ["p{background-color: red;}"],
 // template:"<p>aqui va un empleado</p>",
})
export class EmpleadoComponent implements OnInit {
  nombre = "gibson";
  apellido = "gil";
edad=""

changeAge(event: Event){
  this.edad = (<HTMLInputElement>event.target).value;
}
  cargo = "backend developer";
  empresa = "globant";

habilitacionCuadro = false;
registrado = "There is nobodie registrered";




changeRegistry(event:Event):void{

if((<HTMLInputElement>event.target).value === "si"){
this.registrado = "Succed Registred"
}else{
  this.registrado = "There is nobodie registrered";
}
}
  constructor(){

  }
  ngOnInit(): void {
  
  }



}
