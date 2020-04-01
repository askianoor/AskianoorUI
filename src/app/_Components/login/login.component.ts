import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../_Service/api.service';
import Swal from 'sweetalert2';
import { NavbarComponent } from '../navbar/navbar.component';
import { ReCaptchaV3Service } from 'ng-recaptcha';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};

  constructor(private apiService: ApiService, private navbar: NavbarComponent, private recaptchaV3Service: ReCaptchaV3Service) { }

  ngOnInit(): void { }

  login() {
    this.apiService.loginForm(this.model).subscribe(response => {
        if (response.accessToken !== null ) {
        this.apiService.setUser(response);
        Swal.fire({
          title: 'Successful Login',
          text: 'Welcome to my website.',
          icon: 'success',
          showConfirmButton: false,
          timer: 1500});
      }
        this.navbar.ngOnInit();
    }, error => {
      Swal.fire({
        title: 'Login failed',
        text: 'Username or Password is wrong!',
        icon: 'error'});
    });
  }
}
