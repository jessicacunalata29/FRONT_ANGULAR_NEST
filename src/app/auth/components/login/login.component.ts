import { Component } from '@angular/core';
import { FormControl, FormGroup,  ReactiveFormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-login',
   standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [
    ReactiveFormsModule, // ✅ para formGroup, formControlName
    JsonPipe
  ]
})
export class LoginComponent {
  loginForm=new FormGroup({
    email:new FormControl('admin@hotmail.com'),
    password:new FormControl('admin1234'),
  })

  funIngresar(){
    alert('Ingresando...');
}
}
