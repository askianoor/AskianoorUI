import { Component, OnInit } from '@angular/core';

interface Education {
  educationTitle: string;
  universityTitle: string;
  universityAddress: string;
  universityPlace: string;
  degree: string;
  description: string;
  year: string;
  icon: string;
}

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  Experience: Education[] = [
    // tslint:disable-next-line:max-line-length
    {educationTitle: 'Software Engineer', degree: 'Bachelor of Engineering', universityAddress: 'http://kouroshfruit.com/', universityPlace: 'Iran - Ghazvin', universityTitle: 'Jamshid Kashani' , year: '2020 - now', icon: 'fa-globe', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mattis felis vitae risus pulvinar tincidunt. Nam acvenenatis enim. Aenean hendrerit justo sed.'},
    // tslint:disable-next-line:max-line-length
    {educationTitle: 'Software Engineer', degree: 'Associate of Engineering', universityAddress: 'http://kouroshfruit.com/', universityPlace: 'Iran - Alborz', universityTitle: 'Shahid Beheshti' , year: '2017 - 2019', icon: 'fa-globe', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mattis felis vitae risus pulvinar tincidunt. Nam acvenenatis enim. Aenean hendrerit justo sed.'},
    // tslint:disable-next-line:max-line-length
    {educationTitle: 'Software Engineer', degree: 'School Diploma', universityAddress: 'http://kouroshfruit.com/', universityPlace: 'Iran - Tehran', universityTitle: 'Nezam Moafi' , year: '2013 - 2017', icon: 'fa-globe', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mattis felis vitae risus pulvinar tincidunt. Nam acvenenatis enim. Aenean hendrerit justo sed.'},
    // tslint:disable-next-line:max-line-length
    {educationTitle: 'Human Resource', degree: 'School Diploma', universityAddress: 'http://kouroshfruit.com/', universityPlace: 'Iran - Tehran', universityTitle: 'Nezam Moafi' , year: '2020', icon: 'fa-globe', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mattis felis vitae risus pulvinar tincidunt. Nam acvenenatis enim. Aenean hendrerit justo sed.'},
];


  constructor() { }

  ngOnInit(): void {
  }

}
