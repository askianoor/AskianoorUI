import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/_Service/api.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})

export class RegisterFormComponent implements OnInit {

  constructor(public service: ApiService, private fb: FormBuilder, private router: Router) { }

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
    this.formModel.value.Passwords = this.formModel.value.Passwords.Password;
    console.log(this.formModel.value);
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
