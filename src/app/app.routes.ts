import { Routes } from '@angular/router';
import { LoginComponent } from './screen/login/login.component';
import { RegisterComponent } from './screen/register/register.component';
import { CrudComponent } from './screen/crud/crud.component';
import { LoginGuardia } from './screen/login/login-guardian';

export const routes: Routes = [
    {
        path:'login',
        component: LoginComponent,
        title:'Login'
    },
    {
        path:'register',
        component: RegisterComponent,
        title:'Register'
    },
    {
        path:'crud',
        component: CrudComponent,
        canActivate: [LoginGuardia],
        title:'crud',
    },
];
