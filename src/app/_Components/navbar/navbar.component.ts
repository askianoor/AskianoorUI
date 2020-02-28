import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  menu = [
    { id: 0, name: 'Home', path: '/home' },
    { id: 1, name: 'About Me', path: '/About'  },
    { id: 2, name: 'Portfolio', path: '/Portfolio'  }
  ];

  constructor() { }

  ngOnInit() {
  }

}
