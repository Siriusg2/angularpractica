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

  cargo = "backend developer";
  empresa = "globant";

changeAge (value: string){

}
  constructor(){

  }
  ngOnInit(): void {
  
  }



}
