import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/_Service/api.service';
import { Portfolio } from 'src/app/_Models/general';
import Swal from 'sweetalert2';
import { element } from 'protractor';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  PortfolioTitle = 'Portfolio';
  PortfolioDesc = 'Check out a few of my projects!';
  portfolios = {};

  Portfolios: Portfolio[] = [];

constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getPortfolios();
  }

  getPortfolios() {
    this.apiService.getPortfolios().subscribe(response => {
        if (response !== null ) {
          this.Portfolios = response;
          response.forEach(e =>
            this.Portfolios.push(e)
            );
        }
    }, error => {
      Swal.fire({
        title: 'Portfolios Fetch failed',
        text: 'Something is Wrong, please contact with Web Master!',
        icon: 'error'});
    });
  }

}
