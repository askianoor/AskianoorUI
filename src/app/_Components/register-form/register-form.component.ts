import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/_Service/api.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ReCaptchaV3Service } from 'ng-recaptcha';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { ReCaptchaResponse } from 'src/app/_Models/general';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})

export class RegisterFormComponent implements OnInit {

  constructor(public service: ApiService,
              private fb: FormBuilder, private router: Router,
              private recaptchaV3Service: ReCaptchaV3Service) { }

  formModel = this.fb.group({
    UserName: ['', Validators.required],
    Email: ['', Validators.email],
    FirstName: [''],
    LastName: [''],
    NickName: ['', Validators.required],
    BirthdayDate: [''],
    Passwords: this.fb.group({
      Password: ['', [Validators.required, Validators.minLength(6)]],
      ConfirmPassword: ['', Validators.required]}, { validator: this.comparePasswords })
  });

  ReCaptchaToken: ReCaptchaResponse;

  ngOnInit() {
    this.formModel.reset();
  }

  comparePasswords(fb: FormGroup) {
    const confirmPswrdCtrl = fb.get('ConfirmPassword');
    if (confirmPswrdCtrl.errors == null || 'passwordMismatch' in confirmPswrdCtrl.errors) {
      if (fb.get('Password').value !== confirmPswrdCtrl.value) {
        confirmPswrdCtrl.setErrors({ passwordMismatch: true });
      } else {
        confirmPswrdCtrl.setErrors(null);
      }
    }
  }

  onSubmit() {
    Swal.fire({
      position: 'top-end',
      icon: 'info',
      title: 'Security Check & Registering Process Start ...',
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true
    });
    this.recaptchaV3Service.execute('onSubmit').subscribe((token) =>
    this.service.CheckReCaptchaToken(token).subscribe(
      (res: ReCaptchaResponse) => {
        if (res.success) {
          this.Register();
        } else {
            Swal.fire({
              title: 'ReCaptcha Failed',
              text: 'Please make sure your javascript is ON and try again, If you are not a Robot!',
              icon: 'error'});
        }
      }));
  }

  Register() {
    this.formModel.value.Passwords = this.formModel.value.Passwords.Password;
    this.service.register(this.formModel.value).subscribe(
      (res: any) => {
          if (res.succeeded) {
            this.formModel.reset();
            Swal.fire({
              title: 'Registration Successful!',
              text: 'Thank you for participating in my website!',
              icon: 'success',
              showConfirmButton: false,
              timer: 1500});
            this.router.navigate(['/login']);
          } else {
            res.errors.forEach(element => {
              switch (element.code) {
                case 'DuplicateUserName':
                    Swal.fire({
                      title: 'Registration Failed',
                      text: 'The username already exists in my website!',
                      icon: 'error'});
                    break;

                default:
                    Swal.fire({
                      title: 'Registration Failed',
                      text:  'The system unable to create your user account. Please try again later!',
                      icon: 'error'});
                    break;
              }
            });
          }
        },
        err => {
          console.log(err);
          Swal.fire({
            title: 'Registration Failed',
            text:  'The server is temporarily unable to service your request. Please try again later!',
            icon: 'error'});
        }
      );
    }
}
