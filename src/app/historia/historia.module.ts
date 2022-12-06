import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoriaComponent } from './historia.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HistoriaComponent],
  exports: [HistoriaComponent]
})
export class HistoriaModule { }
