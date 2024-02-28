import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { TecnologiasComponent } from './components/tecnologias/tecnologias.component';
import { EstudiosCertComponent } from './components/estudios-cert/estudios-cert.component';

export const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'inicio',
  //   pathMatch: 'full'
  // },
  {
    path: 'presentacion',
    component: InicioComponent
  },
  {
    path: 'experiencia-laboral',
    component: ExperienciaComponent
  },
  {
    path: 'tecnologias',
    component: TecnologiasComponent
  },
  {
    path: 'estudios-certificados',
    component: EstudiosCertComponent
  }
];
