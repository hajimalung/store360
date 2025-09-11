import { inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private readonly TOKEN_KEY = 'auth_token';
  private readonly router = inject(Router);

  readonly token = signal<string | null>(this.getStoredToken());

  private getStoredToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  setToken(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
    this.token.set(token);
  }

  removeToken(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    this.token.set(null);
    this.router.navigate(['/login']);
  }

  hasToken(): boolean {
    return !!this.token();
  }
}
