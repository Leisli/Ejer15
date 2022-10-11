import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http';
import { JuegodadosComponent } from './juegodados/juegodados.component';
import { DadoComponent } from './dado/dado.component';


@NgModule({
  declarations: [
    AppComponent,
    JuegodadosComponent,
    DadoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
