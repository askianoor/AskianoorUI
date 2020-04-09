import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/_Service/api.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';
import { ReCaptchaV3Service } from 'ng-recaptcha';
import { ReCaptchaResponse } from 'src/app/_Models/general';

declare let Email: any;

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  ReCaptchaToken: ReCaptchaResponse = { success: true, challenge_ts: '', hostname: ''};
  constructor(public service: ApiService, private fb: FormBuilder, private recaptchaV3Service: ReCaptchaV3Service) { }

  formModel = this.fb.group({
    Name: ['', Validators.required],
    Email: ['', Validators.email],
    Subject: ['', Validators.required],
    Message: ['', Validators.required]
  });

  ngOnInit() {
    this.formModel.reset();
  }

  onSubmit() {
    Swal.fire({
      position: 'top-end',
      icon: 'info',
      title: 'Security Check & Sending Process Start ...',
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true
    });
    this.recaptchaV3Service.execute('onSubmit').subscribe((token) =>
    this.service.CheckReCaptchaToken(token).subscribe(
      (res: ReCaptchaResponse) => {
        if (res.success) {
          this.SendMail();
        } else {
            Swal.fire({
              title: 'ReCaptcha Failed',
              text: 'Please make sure your javascript is ON and try again, If you are not a Robot!',
              icon: 'error'});
        }
      }));
  }


  SendMail() {
    this.service.contactMe(this.formModel.value).subscribe(
      (res: any) => {
        if (res.email != null) {
          this.formModel.reset();
          Swal.fire({
            title: 'Sent Successfully!',
            text: 'Thank you for reaching out to me!',
            icon: 'success',
            showConfirmButton: false,
            timer: 1500});
        } else {
            Swal.fire({
              title: 'Sent Failed',
              text: 'The server is temporarily unable to service your request. Please try again later!',
              icon: 'error'});
        }
      },
      err => {
        console.log(err);
        Swal.fire({
          title: 'Sent Failed',
          text:  'The server is temporarily unable to service your request. Please try again later!',
          icon: 'error'});
      }
    );
  }
}
