import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './_Components/homepage/homepage.component';
import { AboutMeComponent } from './_Components/about-me/about-me.component';
import { LoginComponent } from './_Components/login/login.component';


const routes: Routes = [
  {
    path: 'Home',
    component: HomepageComponent,
  },
  {
    path: 'About',
    component: AboutMeComponent,
  },
  {
    path: 'Login',
    component: LoginComponent,
  },
  // {
  //   path: 'register',
  //   component: RegisterFormComponent,
  // },
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: '**', redirectTo: '/Home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
