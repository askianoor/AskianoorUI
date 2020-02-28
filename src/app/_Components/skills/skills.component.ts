import { Component, OnInit } from '@angular/core';


interface Skill {
  name: string;
  level: number;
  cssClass: string;
  group: number;
}


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills: Skill[] = [
    {name: 'C#', level: 98, cssClass: 'bg-success', group: 1},
    {name: '.Net Framework', level: 92, cssClass: 'bg-warning', group: 1},
    {name: 'Entity Framework', level: 95, cssClass: 'bg-primary', group: 1},
    {name: 'Angular', level: 85, cssClass: 'bg-danger', group: 1},
    {name: 'C#', level: 98, cssClass: 'bg-success', group: 2},
    {name: '.Net Framework', level: 92, cssClass: 'bg-warning', group: 2},
    {name: 'Entity Framework', level: 95, cssClass: 'bg-primary', group: 2},
    {name: 'Angular', level: 85, cssClass: 'bg-danger', group: 2},
];

  constructor() { }

  ngOnInit(): void {
  }

  GroupSkills(groupId) {
    return this.skills.filter(x => x.group === groupId);
  }

}
