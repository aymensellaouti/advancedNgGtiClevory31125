import { Injectable } from "@angular/core";
import { CredentialsDto } from "../dto/credentials.dto";
import { LoginResponseDto } from "../dto/login-response.dto";
import { HttpClient } from "@angular/common/http";
import { API } from "../../../config/api.config";
import { Observable } from "rxjs";
import { CONSTANTES } from "../../../config/const.config";

export interface ConnectedUser {
  id: number;
  email: string;
}

@Injectable({
  providedIn: "root",
})
export class AuthService {
  user$!;
  isLoggedIn$!: Observable<boolean>;
  isLoggedOut$!: Observable<boolean>;
  constructor(private http: HttpClient) {}

  login(credentials: CredentialsDto): Observable<LoginResponseDto> {
    return this.http.post<LoginResponseDto>(API.login, credentials);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem("token");
  }

  logout() {
    localStorage.removeItem("token");
  }
  getToken(): string {
    return localStorage.getItem(CONSTANTES.tokenKey) ?? "";
  }

  clearToken(): void {
    localStorage.removeItem(CONSTANTES.tokenKey);
  }

  saveToken(tokenValue: string): void {
    localStorage.setItem(CONSTANTES.tokenKey, tokenValue);
  }
}
