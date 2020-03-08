import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../_Service/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};

  constructor(private apiService: ApiService) { }

  ngOnInit(): void { }

  login() {
    this.apiService.loginForm(this.model).subscribe(response => {
        if (response.accessToken !== null ) {
        this.apiService.setUser(response);
        Swal.fire({
          title: 'ورود موفق',
          text: 'به پنل مدیریت حساب خوش آمدید.',
          icon: 'success',
          showConfirmButton: false,
          timer: 1500});
      }
    }, error => {
      Swal.fire({
        title: 'اعتبارسنجی ناموفق',
        text: 'نام کاربری یا رمز عبور اشتباه است!',
        icon: 'error'});
    });
  }
}
