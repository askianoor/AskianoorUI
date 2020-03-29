import { Component, OnInit } from '@angular/core';
import { VanillaTiltSettings } from 'angular-tilt';
import Typewriter from 't-writer.js';
import { ApiService } from 'src/app/_Service/api.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  HomePageText = '';
  HomePageImage = '';

  tiltSettings: VanillaTiltSettings = {};

  typeOptions = {
    loop: true,
    typeColor: 'white'
  };

  constructor(private apiService: ApiService) {
    this.tiltSettings.speed = 400;
    this.tiltSettings.scale = 1.1;
   }

  ngOnInit() {
    this.getSettings();
    const typeTarget =  document.querySelector( '#tw' );
    const writer = new Typewriter(typeTarget, this.typeOptions);

    writer
    .changeTypeColor('White')
    .type('Hi, I am Ali kianoor.')
    .rest(1000)
    .remove(12)
    .type('Creative.')
    .changeTypeColor('#FFCE54')
    .rest(500)
    .remove(9)
    .type('Diligent.')
    .changeTypeColor('#A0D468')
    .rest(500)
    .remove(9)
    .type('Energetic.')
    .changeTypeColor('yellow')
    .rest(500)
    .remove(9)
    .clear()
    .changeTypeColor('#EC87C0 ')
    .type('I Love Programming and Developing .Net Applications.')
    .rest(1000)
    .clear()
    .changeTypeColor('#F5F7FA')
    .type('I am a Senior Full Stack Developer who has known C# Language.')
    .rest(500)
    .remove(12)
    .type('.Net Framework.')
    .changeTypeColor('#5D9CEC')
    .rest(500)
    .remove(15)
    .type('Angular.')
    .changeTypeColor('#ED5565')
    .rest(500)
    .clear()
    .changeTypeColor('#48CFAD')
    .type('You can learn more about me by checking my skills, experience and other information on this website.')
    .rest(1000)
    .clear()
    .then(writer.start.bind(writer));

    writer.start();
  }

  getSettings() {
    this.apiService.getSettings().subscribe(response => {
        if (response !== null ) {
          console.log(response);
          this.HomePageText = response[0].homePageText;
          this.HomePageImage = response[0].homePageImage;
        }
    }, error => {
      Swal.fire({
        title: 'Dashboard Settings Fetch failed',
        text: 'Something is Wrong, please contact with Web Master!',
        icon: 'error'});
    });
  }

}
