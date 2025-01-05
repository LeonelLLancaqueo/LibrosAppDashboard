import { Component, Input } from '@angular/core';
import { Genero } from '../../inteface/genero';

@Component({
  selector: 'app-genero-row',
  standalone: true,
  imports: [],
  templateUrl: './genero-row.component.html',
  styleUrl: './genero-row.component.css'
})
export class GeneroRowComponent {
  @Input() genero!: Genero;
}
