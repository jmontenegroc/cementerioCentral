import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GaleriaModule } from './galeria/galeria.module';
import { MainModule } from './main/main.module';
import { MaterialesModule } from './materiales/materiales.module';

@NgModule({
  declarations: [
    AppComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GaleriaModule,
    MainModule,
    MaterialesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
