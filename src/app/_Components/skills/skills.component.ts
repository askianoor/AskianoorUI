import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ApiService } from 'src/app/_Service/api.service';
import { Skill } from 'src/app/_Models/general';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills: Skill[] = [];
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getSkills();
  }

  getSkills() {
    this.apiService.getSkills().subscribe(response => {
        if (response !== null ) {
          this.skills = response;
        }
    }, error => {
      Swal.fire({
        title: 'Skills Fetch failed',
        text: 'Something is Wrong, please contact with Web Master!',
        icon: 'error'});
    });
  }

  GroupSkills(groupId: number) {
    return this.skills.filter(x => x.group === groupId);
  }

}
