import { Component, inject } from '@angular/core';
import { FormControl, FormGroup,  ReactiveFormsModule , Validators} from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { AuthService } from '../../services/auth.service';

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

 private authService = inject(AuthService);


  loginForm=new FormGroup({
    email:new FormControl("",[Validators.email,Validators.required]),
    password:new FormControl("",Validators.required),
  })
 funIngresar() {
    this.authService.loginConNest(this.loginForm.value).subscribe({
      next: (res) => {
        console.log("✅ Login correcto:", res);
      },
      error: (err) => {
        console.error("❌ Error en login:", err);
      }
    });
  }
}
    //alert('Ingresando...');


