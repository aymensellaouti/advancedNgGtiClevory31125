import { Injectable } from "@angular/core";
import { CredentialsDto } from "../dto/credentials.dto";
import { LoginResponseDto } from "../dto/login-response.dto";
import { HttpClient } from "@angular/common/http";
import { API } from "../../../config/api.config";
import { BehaviorSubject, map, Observable, Subject, tap } from "rxjs";
import { CONSTANTES } from "../../../config/const.config";

export interface ConnectedUser {
  id: number;
  email: string;
}

@Injectable({
  providedIn: "root",
})
export class AuthService {
  #userSubeject$ = new BehaviorSubject<ConnectedUser | null>(null);
  user$ = this.#userSubeject$.asObservable();
  isLoggedIn$: Observable<boolean> = this.user$.pipe(map((user) => !!user));
  isLoggedOut$: Observable<boolean> = this.user$.pipe(map((user) => !user));
  constructor(private http: HttpClient) {
    // choufli el user fel localstorage
    const user = localStorage.getItem(CONSTANTES.connectedUser);
    if (user) {
      this.#userSubeject$.next(JSON.parse(user));
    }
  }

  login(credentials: CredentialsDto): Observable<LoginResponseDto> {
    return this.http.post<LoginResponseDto>(API.login, credentials).pipe(
      tap((response) => {
        const user: ConnectedUser = {
          id: response.userId,
          email: credentials.email,
        };
        this.#userSubeject$.next(user);
        localStorage.setItem(CONSTANTES.connectedUser, JSON.stringify(user));
        this.saveToken(response.id);
      })
    );
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem("token");
  }

  logout() {
    this.clearToken();
    localStorage.removeItem(CONSTANTES.connectedUser);
    this.#userSubeject$.next(null);
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
