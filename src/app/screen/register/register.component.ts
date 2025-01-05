import { Component, inject } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  authService: AuthService= inject(AuthService);
  private formBuilder = inject(FormBuilder);
  register= this.formBuilder.group({
    usuario: ['',Validators.required],
    password: ['', [Validators.minLength(8), Validators.required]],
    repassword: ['',Validators.required],
  })
  onSubmit(){
    console.log(this.register.value)
  }
}
