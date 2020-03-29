import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ApiService } from 'src/app/_Service/api.service';
import { Education } from 'src/app/_Models/general';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  Educations: Education[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getEducations();
  }

  getEducations() {
    this.apiService.getEducations().subscribe(response => {
        if (response !== null ) {
          this.Educations = response;
        }
    }, error => {
      Swal.fire({
        title: 'Educations Fetch failed',
        text: 'Something is Wrong, please contact with Web Master!',
        icon: 'error'});
    });
  }

}
