import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { DropdownModule } from 'primeng/dropdown';
import { Seccion } from '../../models/seccion';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule, DropdownModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  public enlaceActivo: Seccion = new Seccion('Presentación', '/presentacion');

  public enlaces: Seccion[] = [
    new Seccion('Presentación', '/presentacion'),
    new Seccion('Experiencia laboral', '/experiencia-laboral'),
    new Seccion('Tecnologías', '/tecnologias'),
    new Seccion('Estudios y certificados', '/estudios-certificados')
  ];

  constructor(
    private router: Router
  ) {}

  /**
   * Método que redirecciona al enlace activo
   */
  public goToActive(): void {
    this.router.navigate([this.enlaceActivo.enlace]);
  }

}
