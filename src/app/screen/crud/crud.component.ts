import { Component, inject } from '@angular/core';
import { CrudService } from '../../service/crud.service';
import { Autor } from '../../inteface/autor';
import { Libro } from '../../inteface/libro';
import { Genero } from '../../inteface/genero';
import { AutorRowComponent } from '../../component/autor-row/autor-row.component';
import { LibroRowComponent } from '../../component/libro-row/libro-row.component';
import { GeneroRowComponent } from '../../component/genero-row/genero-row.component';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-crud',
  standalone: true,
  imports: [CommonModule,GeneroRowComponent, LibroRowComponent, AutorRowComponent],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.css'
})
export class CrudComponent {

  crudService: CrudService= inject(CrudService);
  authService: AuthService= inject(AuthService);

  autorList: Autor[]=[];
  libroList: Libro[]=[];
  generoList: Genero[]=[];  

  viewAutor: Boolean;
  viewLibro: Boolean;
  viewGenero: Boolean;

  constructor(){
    this.viewAutor= false;
    this.viewLibro= false;
    this.viewGenero= false;
    this.toCrudAutor();
  }

  toCrudAutor(){
    this.crudService.getAutor().then(
      (autores:Autor[])=>{ this.autorList= autores}      
    )
    this.viewAutor= true;
    this.viewLibro= false;
    this.viewGenero= false;
  }
   toCrudLibro(){
    this.crudService.getLibro().then(
      (libros:Libro[])=>{ this.libroList= libros}      
    )
    this.viewLibro= true;
    this.viewGenero= false;
    this.viewAutor= false;
  }
   toCrudGenero(){
    this.crudService.getGenero().then(
      (generos:Genero[])=>{ this.generoList= generos}      
    )
    this.viewGenero= true;
    this.viewAutor= false;
    this.viewLibro= false;
  }


  

}
