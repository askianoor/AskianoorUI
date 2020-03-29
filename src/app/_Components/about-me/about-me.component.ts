import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/_Service/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  AboutMe: any = {Description: 'About Me Description', Image: 'bg-success'};

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getSettings();
  }

  getSettings() {
    this.apiService.getSettings().subscribe(response => {
        if (response !== null ) {
          console.log(response);
          this.AboutMe.Description = response[0].aboutMeDescription;
          this.AboutMe.Image = response[0].aboutMeImage;
        }
    }, error => {
      Swal.fire({
        title: 'Dashboard Settings Fetch failed',
        text: 'Something is Wrong, please contact with Web Master!',
        icon: 'error'});
    });
  }

}
