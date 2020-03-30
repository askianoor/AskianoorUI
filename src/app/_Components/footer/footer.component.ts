import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/_Service/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  footerText = 'The Connection has been lost to Ali Kianoor Website!';

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getSettings();
  }

  getSettings() {
    this.apiService.getSettings().subscribe(response => {
        if (response !== null ) {
          this.footerText = response[0].footerText;
          console.log(this.footerText);
        }
    }, error => {
      Swal.fire({
        title: 'Dashboard Settings Fetch failed',
        text: 'Something is Wrong, please contact with Web Master!',
        icon: 'error'});
    });
  }

}
