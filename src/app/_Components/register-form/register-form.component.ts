import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/_Service/api.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})

export class RegisterFormComponent implements OnInit {

  constructor(public service: ApiService, private fb: FormBuilder) { }

  formModel = this.fb.group({
    UserName: ['', Validators.required],
    Email: ['', Validators.email],
    FullName: [''],
    Passwords: this.fb.group({
      Password: ['', [Validators.required, Validators.minLength(6)]],
      ConfirmPassword: ['', Validators.required]
    }, { validator: this.comparePasswords })

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
    this.service.register(this.formModel).subscribe(
      (res: any) => {
        if (res.succeeded) {
          this.formModel.reset();
          Swal.fire({
            title: 'Registration Successful!',
            text: 'Thank you for participating in my website!',
            icon: 'success',
            showConfirmButton: false,
            timer: 1500});
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
