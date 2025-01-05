import { Component, Input } from '@angular/core';
import { Autor } from '../../inteface/autor';

@Component({
  selector: 'app-autor-row',
  standalone: true,
  imports: [],
  templateUrl: './autor-row.component.html',
  styleUrl: './autor-row.component.css'
})
export class AutorRowComponent {
  @Input() autor!: Autor;
}
