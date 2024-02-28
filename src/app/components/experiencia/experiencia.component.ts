import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { CardModule } from 'primeng/card';
import { TimelineModule } from 'primeng/timeline';

@Component({
  selector: 'app-experiencia',
  standalone: true,
  imports: [CommonModule, AccordionModule, TimelineModule, CardModule],
  templateUrl: './experiencia.component.html',
  styleUrl: './experiencia.component.scss',
  animations: []
})
export class ExperienciaComponent {

  public events: any = [
    {
      name: 'Analista Programador',
      status: 'Analista Programador',
      date: 'Marzo 2024 - Ahora',
      description: `<ul>
      <li>Toma de requisitos</li>
      <li>Elaboración de documentación de análisis</li>
      <li>Desarrollo en varios proyectos: evolutivos, mejoras y correctivos</li>
      <li>Optimización de aplicativos</li>
      <li>Gestión de incidencias y soporte</li>
    </ul>`
    },
    {
      name: 'Desarrollador Senior',
      status: 'Desarrollador Senior',
      date: 'Enero 2023 - Marzo 2024',
      description: `<ul>
      <li>Desarrollo en varios proyectos: evolutivos, mejoras y correctivos</li>
      <li>Optimización de aplicativos</li>
      <li>Gestión de incidencias y soporte</li>
    </ul>`
    },
    {
      name: 'Scrum Master',
      status: 'Scrum Master',
      date: 'Enero 2022 - Enero 2023',
      description: `<ul>
      <li>Gestión de recursos</li>
      <li>Gestión, organización y repartición de tareas</li>
      <li>Organizador de daily o weekly</li>
      <li>Mejora de productividad</li>
    </ul>`
    },
    {
      name: 'Desarrollador Junior',
      status: 'Desarrollador Junior',
      date: 'Diciembre 2020 - Enero 2022',
      description: `<ul>
      <li>Desarrollo en varios proyectos: evolutivos, mejoras y correctivos</li>
    </ul>`
    }
  ];

}
