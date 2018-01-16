import { Injectable } from '@angular/core';

@Injectable()
export class PruebaService {

  hoy: any = new Date();

  constructor() { }

  public getHoy = () => {
    console.log(this.hoy);
    return this.hoy;
  }
}
