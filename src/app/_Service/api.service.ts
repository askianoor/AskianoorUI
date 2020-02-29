import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  readonly BaseURI = 'http://localhost:54277/api';

  register(formModel) {
    const body = {
      UserName: formModel.value.UserName,
      Email: formModel.value.Email,
      FullName: formModel.value.FullName,
      Password: formModel.value.Passwords.Password
    };
    return this.http.post(this.BaseURI + '/ApplicationUser/Register', body);
  }


  contactMe(formModel) {
    const body = {
      Name: formModel.value.Name,
      Email: formModel.value.Email,
      Subject: formModel.value.Subject,
      Message: formModel.value.Message
    };
    return this.http.post(this.BaseURI + '/Contact', body);
  }
}
