import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/_Service/api.service';
import Swal from 'sweetalert2';
import { SocialNetwork } from 'src/app/_Models/general';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  AboutMe: any = {Description: 'About Me Description is Loading ...', Image: ''};
  SocialNetworks: SocialNetwork[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getSettings();
    this.getSocialNetworks();
  }

  getSettings() {
    this.apiService.getSettings().subscribe(response => {
        if (response !== null ) {
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

  getSocialNetworks() {
    this.apiService.getSocialNetworks().subscribe(response => {
        if (response !== null ) {
          this.SocialNetworks = response;
        }
    }, error => {
      Swal.fire({
        title: 'SocialNetworks Fetch failed',
        text: 'Something is Wrong, please contact with Web Master!',
        icon: 'error'});
    });
  }

}
