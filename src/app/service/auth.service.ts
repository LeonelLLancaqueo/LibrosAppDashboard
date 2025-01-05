import { Injectable } from '@angular/core';
import { Usuario } from '../inteface/usuario';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url= "http://localhost:8080/auth";

  constructor(private router: Router) { }
  async login(user:{}) :Promise<boolean>{
    let exito: boolean= false; 
    
    const response= await fetch(`${this.url}/login`,{
      method:"POST",
      body: JSON.stringify(user),
      headers:{
        "Content-Type": "application/json",
      }
    })
    if(response.status === 200){
      exito= true;
      // deberia redirigir desde aca?
      sessionStorage.setItem("authenticated", "true");
    }
    
    return exito;
    
  }
  logout(){
    sessionStorage.setItem("authenticated", "false");
    this.router.navigate(['login']);
  }
  async register(user:{}):Promise<boolean>{ //que pasa si pongo que no retorna nada?
    let exito: boolean= false; 

    const response= await fetch(`${this.url}/register`,{
      method:"POST",
      body: JSON.stringify(user),
      headers:{
        "Content-Type": "application/json",
    }
    });
    if(response.status === 200){
      exito= true;
      sessionStorage.setItem("authenticated", "true");
    }
    return exito;
  }

  public isAuthenticated():boolean{
    let rs: boolean= false;
    if(sessionStorage.getItem("authenticated") == "true"){
      rs= true;
    }
    return rs;
  }
}


  
