import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejedirectivangswitch',
  templateUrl: './ejedirectivangswitch.component.html',
  styleUrls: ['./ejedirectivangswitch.component.css']
})
export class EjedirectivangswitchComponent implements OnInit {

  jugadores: any[] = [
    {nombre: 'Earving Jhonson', equipo: 'L.A. Lakers'},
    {nombre: 'Larry Bird', equipo: 'Boston Celtics'},
    {nombre: 'Michael Jordan', equipo: 'Chicago Bulls'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
