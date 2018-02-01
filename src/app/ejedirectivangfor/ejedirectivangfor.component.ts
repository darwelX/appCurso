import { Component, OnInit } from '@angular/core';
import { Alumno } from '../models/alumno.model';

@Component({
  selector: 'app-ejedirectivangfor',
  templateUrl: './ejedirectivangfor.component.html',
  styleUrls: ['./ejedirectivangfor.component.css']
})
export class EjedirectivangforComponent implements OnInit {
  a: Alumno;
  cursos: string[];
  public alumnos: Array<Alumno> = [
    { id: 1, nombre: 'Darwel Quintero', apellidos: 'Quintero Duran', ciudad: 'Madrid', getPuntuacion: null },
    { id: 2, nombre: 'Flor Maria', apellidos: 'Quintero Duran', ciudad: 'Valencia', getPuntuacion: null }
  ];

  constructor() {
    this.cursos = ['CSS', 'HTML', 'Angular'];
  }

  ngOnInit() {
  }

}
