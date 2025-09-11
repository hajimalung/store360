import { HttpClient } from "@angular/common/http";
import { Injectable, computed, inject } from "@angular/core";
import { LoginCredentials, LoginResponse } from "../../modals/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService{
  private readonly LOGIN_API = `/api/auth/login`;
  private readonly http = inject(HttpClient);

  login(credentials: LoginCredentials){
    return this.http.post<LoginResponse>(this.LOGIN_API, credentials).pipe();
  }
}
