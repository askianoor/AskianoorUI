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
    { id: 2, name: 'Portfolio', path: '/Portfolio'  },
    { id: 2, name: 'Skills', path: '/Skills'  },
    { id: 2, name: 'Experience', path: '/Experience'  },
    { id: 2, name: 'Education', path: '/Education'  },
    { id: 2, name: 'Contact Me', path: '/Contact'  },
  ];

  constructor() { }

  ngOnInit() {
  }

}
