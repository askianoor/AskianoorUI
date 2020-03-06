import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  PortfolioTitle = 'Portfolio';
  PortfolioDesc = 'Check out a few of my projects!';
  portfolios = {};

  constructor() { }

  ngOnInit() {
  }

}
