import { Component, inject } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  authService: AuthService= inject(AuthService);
  login= new FormGroup({
    username: new FormControl('',Validators.required) || " ",
    password: new FormControl('', Validators.required) || " ",
  }) 
  constructor(private router: Router) { }
  public onSubmit(){
    let exito:Promise<boolean> = this.authService.login(this.login.value);
    exito.then((value)=>{
      if(value){
        this.router.navigate(['crud']);
      }
    }) 
    // falta mensaje de usuario incorrecto 
  }
  
}
