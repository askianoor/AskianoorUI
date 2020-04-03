import { Injectable, ɵCompiler_compileModuleSync__POST_R3__ } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { throwError, Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { LoginResponse, UserProfileResponse } from '../_Models/user';
import { Navbar, DashboardSettings, Skill, Education, Experience,
        Portfolio, SocialNetwork, ReCaptchaResponse, ReCaptchaRequest } from '../_Models/general';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  ReqToken: ReCaptchaRequest = { response: '', secret: 'SecrectKey' };
  constructor(private router: Router, private http: HttpClient) { }

  readonly BaseURI = '/api';

  // Http Options
  httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

  httpReCaptchaOptions = {headers: new HttpHeaders(
    {'Content-Type': 'application/x-www-form-urlencoded',
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Origin': '*'})};

  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      Swal.fire({
        title: 'Network Error',
        text: 'Network Problem; please try again later!',
        icon: 'error'});
    } else {
      // The backend returned an unsuccessful response code.
      Swal.fire({
        title: 'System Error',
        text: 'Something bad happened; please try again later!',
        icon: 'error'});
    }

    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later. Error:' + JSON.stringify(error));
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
      .get<UserProfileResponse>(this.BaseURI + '/UserProfile', this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  register(RegisterModel) {
    return this.http.post(this.BaseURI + '/AppUser/Register', RegisterModel, this.httpOptions);
  }

  // contactMe(ContactModel) {
  //   return this.http.post(this.BaseURI + '/Contact', ContactModel);
  // }

  getNavbars(): Observable<Navbar> {
    return this.http
      .get<Navbar>(this.BaseURI + '/Navbars', this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  getSettings(): Observable<DashboardSettings> {
    return this.http
      .get<DashboardSettings>(this.BaseURI + '/DashboardSettings/1', this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  getSkills(): Observable<Skill[]> {
    return this.http
      .get<Skill[]>(this.BaseURI + '/Skills', this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  getEducations(): Observable<Education[]> {
    return this.http
      .get<Education[]>(this.BaseURI + '/Educations', this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  getExperiences(): Observable<Experience[]> {
    return this.http
      .get<Experience[]>(this.BaseURI + '/Experiences', this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  getPortfolios(): Observable<Portfolio[]> {
    return this.http
      .get<Portfolio[]>(this.BaseURI + '/Portfolios', this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  getSocialNetworks(): Observable<SocialNetwork[]> {
    return this.http
      .get<SocialNetwork[]>(this.BaseURI + '/SocialNetworks', this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  // Verify The Token is Valid On the Server
  CheckReCaptchaToken(response): Observable<ReCaptchaResponse> {
    this.ReqToken.response = response;
    return this.http
      .post<ReCaptchaResponse>('https://www.google.com/recaptcha/api/siteverify?secret=' + this.ReqToken.secret +
                                      '&response=' + this.ReqToken.response, null , this.httpReCaptchaOptions)
                                      // httpReCaptchaOptions
      .pipe(catchError(this.handleError));
  }
}
