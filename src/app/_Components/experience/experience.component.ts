import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/_Service/api.service';
import { Experience } from 'src/app/_Models/general';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

Experiences: Experience[] = [];

constructor(private apiService: ApiService) { }

ngOnInit() {
  this.getExperiences();
}

getExperiences() {
  this.apiService.getExperiences().subscribe(response => {
      if (response !== null ) {
        this.Experiences = response;
      }
  }, error => {
    Swal.fire({
      title: 'Experiences Fetch failed',
      text: 'Something is Wrong, please contact with Web Master!',
      icon: 'error'});
  });
}

}
