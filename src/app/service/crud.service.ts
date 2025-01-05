import { Injectable } from '@angular/core';

import { Genero } from '../inteface/genero';
import { Libro } from '../inteface/libro';
import { Autor } from '../inteface/autor';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  private url= "http://localhost:8080";
  
  constructor() { }

  async getAutor():Promise<Autor[]>{
    const data= await fetch(this.url+"/autor");
    return (await data.json()) ?? [];
  }
  async getLibro():Promise<Libro[]>{
    const data= await fetch(this.url+"/libro");
    return (await data.json()) ?? [];
  }
  async getGenero():Promise<Genero[]>{
    const data= await fetch(this.url+"/genero");
    return (await data.json()) ?? [];
  }
  
}
