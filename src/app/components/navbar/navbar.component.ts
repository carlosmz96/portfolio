import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Seccion } from '../../models/seccion';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  public enlaces: Seccion[] = [
    new Seccion('Presentación', '/presentacion'),
    new Seccion('Experiencia laboral', '/experiencia-laboral'),
    new Seccion('Tecnologías', '/tecnologias'),
    new Seccion('Estudios y certificados', '/estudios-certificados')
  ]

}
