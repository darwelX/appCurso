import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejeventbinding',
  templateUrl: './ejeventbinding.component.html',
  styleUrls: ['./ejeventbinding.component.css']
})
export class EjeventbindingComponent implements OnInit {

  texto: any = 'Originalmente el texto se muestra así';

  constructor() { }

  ngOnInit() {
  }

  modificarTexto() {
    this.texto = 'Al pulsar el boton el texto se muestra asi';
  }
}
