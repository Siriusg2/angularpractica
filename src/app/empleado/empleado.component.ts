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
   edad = 32;
  cargo = "backend developer";
  empresa = "globant";

// getEdad(): number { return this.edad; }
  constructor(){

  }
  ngOnInit(): void {
  
  }


}
