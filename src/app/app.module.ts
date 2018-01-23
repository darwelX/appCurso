import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FechaactualComponent } from './fechaactual/fechaactual.component';
import { CopyrightComponent } from './copyright/copyright.component';
import { PruebaService } from './services/prueba.service';
import { ViewmodelComponent } from './viewmodel/viewmodel.component';
import { EjpropertybindingComponent } from './ejpropertybinding/ejpropertybinding.component';
import { EjeventbindingComponent } from './ejeventbinding/ejeventbinding.component';
import { Ej2waybindingComponent } from './ej2waybinding/ej2waybinding.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    FechaactualComponent,
    CopyrightComponent,
    ViewmodelComponent,
    EjpropertybindingComponent,
    EjeventbindingComponent,
    Ej2waybindingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [
    PruebaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
