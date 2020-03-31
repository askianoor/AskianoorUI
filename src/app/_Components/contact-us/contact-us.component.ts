import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/_Service/api.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import '../../../assets/Scripts/smtp.js';
import Swal from 'sweetalert2';
declare let Email: any;

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor(public service: ApiService, private fb: FormBuilder) { }

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

    Email.send({
      SecureToken : 'tokentxt',
      To : 'askianoor@gmail.com',
      From : this.formModel.value.Email,
      Subject : this.formModel.value.Subject + ' From ' + this.formModel.value.Name,
      Body : this.formModel.value.Message
      }).then(
        message =>  console.log(message),
                    Swal.fire({
                    title: 'Sent Successfully!',
                    text: 'Thank you for reaching out to me!',
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 1500}),
                    this.formModel.reset()
      );
  }

  // onSubmit() {
  //   this.service.contactMe(this.formModel.value).subscribe(
  //     (res: any) => {
  //       if (res.succeeded) {
  //         this.formModel.reset();
  //         Swal.fire({
  //           title: 'Sent Successfully!',
  //           text: 'Thank you for reaching out to me!',
  //           icon: 'success',
  //           showConfirmButton: false,
  //           timer: 1500});
  //       } else {
  //         res.errors.forEach(element => {
  //                 Swal.fire({
  //                   title: 'Sent Failed',
  //                   text: 'The server is temporarily unable to service your request. Please try again later!',
  //                   icon: 'error'});
  //         });
  //       }
  //     },
  //     err => {
  //       console.log(err);
  //       Swal.fire({
  //         title: 'Sent Failed',
  //         text:  'The server is temporarily unable to service your request. Please try again later!',
  //         icon: 'error'});
  //     }
  //   );
  // }
}
