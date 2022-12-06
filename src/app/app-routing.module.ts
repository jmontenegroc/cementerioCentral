import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { MaterialesComponent } from './materiales/materiales.component';
import { HistoriaComponent } from './historia/historia.component';
import { ArtsciComponent } from './artsci/artsci.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'materials', component: MaterialesComponent },
  { path: 'gallery', component: GaleriaComponent },
  { path: 'history', component: HistoriaComponent },
  { path: 'art+sci', component: ArtsciComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
