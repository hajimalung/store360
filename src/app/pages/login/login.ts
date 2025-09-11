import { Component, inject } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AuthService } from '../../services/http/auth';
import { LoginCredentials, LoginResponse } from '../../modals/auth';
import { TokenService } from '../../services/http/token';


@Component({
  selector: 'app-login',
  imports: [FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatProgressSpinnerModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl = new FormControl('', [Validators.required, Validators.minLength(6)]);

  private readonly authService = inject(AuthService);
  private readonly tokenService = inject(TokenService);

  onSignInClick(){
    if(this.emailFormControl.invalid || this.passwordFormControl.invalid){
      return;
    }
    const credentials:LoginCredentials = {
      email: this.emailFormControl.value!,
      password: this.passwordFormControl.value!
    }
    this.authService.login(credentials).subscribe({
      next: (response:LoginResponse) => {
        this.tokenService.setToken(response.token?response.token:"NULL");
        console.log('Login successful', response);
      },
      error: (error) => {
        console.error('Login failed', error);
      }
    });
  }
}

