import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { jwtDecode } from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost/footyflix_php/functions/login.php';

  constructor(private http: HttpClient) {}

  login(credentials: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, credentials).pipe(
      tap(response => {
        if (response && response.jwt) {
          localStorage.setItem('token', response.jwt);
          localStorage.setItem('isAdmin', response.is_admin ? 'true' : 'false');
        }
      }),
      catchError((error: HttpErrorResponse) => {
        if (error.error instanceof ErrorEvent) {
          // Client-side error (e.g., network connectivity issue)
          console.error('An error occurred:', error.error.message);
        } else {
          // Server-side error (non-2xx HTTP response)
          console.error(
            `Backend returned code ${error.status}, ` +
            `body was: ${error.error}`
          );
          if (error.status === 200) {
            // Handle specific case of HTTP 200 with parsing error
            return throwError('Unexpected server response format');
          } else {
            // Handle other error cases
            return throwError('Login failed. Please try again later.');
          }
        }
        return throwError('Login failed. Please try again later.');
      })
    );
  }

  logout(): void {
    // Clear token and isAdmin status from local storage
    localStorage.removeItem('token');
    localStorage.removeItem('isAdmin');
  }

  isLoggedIn(): boolean {
    // Check if token exists in local storage
    return !!localStorage.getItem('token');
  }

  isAdmin(): boolean {
    // Check if isAdmin flag is 'true' in local storage
    return localStorage.getItem('isAdmin') === 'true';
  }

  getToken(): string | null {
    // Get token from local storage
    return localStorage.getItem('token');
  }
  getUsernameFromToken(): string | null {
    const token = this.getToken();
    if (token) {
      const decoded: any = jwtDecode(token);
      return decoded.username;
    }
    return null;
  }

  getUserIdFromToken(): number | null {
    const token = this.getToken();
    if (token) {
      const decoded: any = jwtDecode(token);
      return Number(decoded.user_id);
    }
    return null;
  }
}
  

