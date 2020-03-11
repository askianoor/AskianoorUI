import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../_Service/api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private apiService: ApiService
  ) { }

  canActivate() {
    if (!this.apiService.isLoggedIn()) {
      this.router.navigate(['/Login']);
      return false;
    } else {
      return true;
    }
  }

}
