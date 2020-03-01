import { Component, OnInit } from '@angular/core';

interface Experience {
  jobTitle: string;
  companyTitle: string;
  companyAddress: string;
  description: string;
  year: number;
  cssClass: string;
  icon: string;
}


@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  Experience: Experience[] = [
    // tslint:disable-next-line:max-line-length
    {jobTitle: 'Senior .Net Developer', companyAddress: 'http://kouroshfruit.com/', companyTitle: 'Koroush Fruit' , year: 2020, cssClass: 'bg-success', icon: 'fa-shopping-basket', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mattis felis vitae risus pulvinar tincidunt. Nam acvenenatis enim. Aenean hendrerit justo sed.'},
    // tslint:disable-next-line:max-line-length
    {jobTitle: 'Senior .Net Developer', companyAddress: 'http://kouroshfruit.com/', companyTitle: 'Koroush Fruit' , year: 2020, cssClass: 'bg-success', icon: 'fa-shopping-basket', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mattis felis vitae risus pulvinar tincidunt. Nam acvenenatis enim. Aenean hendrerit justo sed.'},
    // tslint:disable-next-line:max-line-length
    {jobTitle: 'Senior .Net Developer', companyAddress: 'http://kouroshfruit.com/', companyTitle: 'Koroush Fruit' , year: 2020, cssClass: 'bg-success', icon: 'fa-shopping-basket', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mattis felis vitae risus pulvinar tincidunt. Nam acvenenatis enim. Aenean hendrerit justo sed.'},
    // tslint:disable-next-line:max-line-length
    {jobTitle: 'Senior .Net Developer', companyAddress: 'http://kouroshfruit.com/', companyTitle: 'Koroush Fruit' , year: 2020, cssClass: 'bg-success', icon: 'fa-shopping-basket', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mattis felis vitae risus pulvinar tincidunt. Nam acvenenatis enim. Aenean hendrerit justo sed.'},
];

  constructor() { }

  ngOnInit(): void {
  }

}
