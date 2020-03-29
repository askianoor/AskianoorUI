import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/_Service/api.service';
import Swal from 'sweetalert2';
import { Navbar } from 'src/app/_Models/general';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedIn = false;
  menu: Navbar;

  constructor(private apiService: ApiService) {
    this.isLoggedIn = this.apiService.isLoggedIn();
  }

  ngOnInit() {
    this.getNavBars();
    this.isLoggedIn = this.apiService.isLoggedIn();
  }

  Logout() {
      this.apiService.logout();
      this.ngOnInit();
  }

  getNavBars() {
    this.apiService.getNavbars().subscribe(response => {
        if (response !== null ) {
          this.menu = response;
        }
    }, error => {
      Swal.fire({
        title: 'Menu Fetch failed',
        text: 'Something is Wrong, please contact with Web Master!',
        icon: 'error'});
    });
  }

}
