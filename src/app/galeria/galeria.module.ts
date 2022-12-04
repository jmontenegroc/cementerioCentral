import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GaleriaComponent } from './galeria.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [GaleriaComponent],
  exports: [GaleriaComponent]
})
export class GaleriaModule { }
