import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FechaactualComponent } from './fechaactual/fechaactual.component';
import { CopyrightComponent } from './copyright/copyright.component';
import { PruebaService } from './services/prueba.service';
import { ViewmodelComponent } from './viewmodel/viewmodel.component';


@NgModule({
  declarations: [
    AppComponent,
    FechaactualComponent,
    CopyrightComponent,
    ViewmodelComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    PruebaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
