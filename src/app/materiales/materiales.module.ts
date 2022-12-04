import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialesComponent } from './materiales.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MaterialesComponent],
  exports: [MaterialesComponent]
})
export class MaterialesModule { }
