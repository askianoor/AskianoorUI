import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { throwError, Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { LoginResponse, UserProfileResponse } from '../_Models/user';
import { Navbar, DashboardSettings, Skill, Education } from '../_Models/general';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private router: Router, private http: HttpClient) { }

  readonly BaseURI = 'https://api.askianoor.ir/api';

  // Http Options
  httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
      Swal.fire({
        title: 'خطای شبکه',
        text: 'خطایی در سیستم رخ داده است لطفا مجددا تلاش کنید!',
        icon: 'error'});
    } else {
      // The backend returned an unsuccessful response code.
      Swal.fire({
        title: ' ${error.status} خطای سیستمی',
        text: 'خطایی در سیستم رخ داده است لطفا مجددا تلاش کنید!',
        icon: 'error'});
    }

    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }

  // Verify user credentials on server to get token
  loginForm(data): Observable<LoginResponse> {
    return this.http
      .post<LoginResponse>(this.BaseURI + '/AppUser/login', data, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  // After login save token and other values(if any) in localStorage
  setUser(resp: LoginResponse) {
    localStorage.setItem('accessToken', resp.accessToken);
    this.router.navigate(['/Admin/Dashboard']);
  }

  // Checking if token is set
  isLoggedIn() {
    return localStorage.getItem('accessToken') != null;
  }

  // After clearing localStorage redirect to login screen
  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  // Get profile data from server for Dashboard
  getProfileData(): Observable<UserProfileResponse> {
    return this.http
      .get<UserProfileResponse>(this.BaseURI + '/UserProfile')
      .pipe(retry(2), catchError(this.handleError));
  }

  register(RegisterModel) {
    return this.http.post(this.BaseURI + '/AppUser/Register', RegisterModel);
  }


  contactMe(ContactModel) {
    return this.http.post(this.BaseURI + '/Contact', ContactModel);
  }

  getNavbars(): Observable<Navbar> {
    return this.http
      .get<Navbar>(this.BaseURI + '/Navbars')
      .pipe(retry(2), catchError(this.handleError));
  }

  getSettings(): Observable<DashboardSettings> {
    return this.http
      .get<DashboardSettings>(this.BaseURI + '/DashboardSettings')
      .pipe(retry(2), catchError(this.handleError));
  }

  getSkills(): Observable<Skill[]> {
    return this.http
      .get<Skill[]>(this.BaseURI + '/Skills')
      .pipe(retry(2), catchError(this.handleError));
  }

  getEducations(): Observable<Education[]> {
    return this.http
      .get<Education[]>(this.BaseURI + '/Educations')
      .pipe(retry(2), catchError(this.handleError));
  }
}
