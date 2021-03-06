import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {BsDropDownModule} from 'bootstrap/js/dropdown';
import {CarouselModule} from 'bootstrap/js/carousel';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PlatoComponent } from './plato/plato.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { CarritoComponent } from './carrito/carrito.component';
import { FooterComponent } from './footer/footer.component';



@NgModule(

  {
  declarations: [
    AppComponent,
    HeaderComponent,
    PlatoComponent,
    UsuarioComponent,
    CarritoComponent,
    FooterComponent

  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
