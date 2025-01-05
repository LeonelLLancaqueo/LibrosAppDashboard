import { Component, Input } from '@angular/core';
import { Libro } from '../../inteface/libro';

@Component({
  selector: 'app-libro-row',
  standalone: true,
  imports: [],
  templateUrl: './libro-row.component.html',
  styleUrl: './libro-row.component.css'
})
export class LibroRowComponent {
  @Input() libro!: Libro;
}
