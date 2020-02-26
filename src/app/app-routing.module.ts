import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './_Components/homepage/homepage.component';
import { AboutMeComponent } from './_Components/about-me/about-me.component';
import { LoginComponent } from './_Components/login/login.component';
import { SkillsComponent } from './_Components/skills/skills.component';
import { PortfolioComponent } from './_Components/portfolio/portfolio.component';
import { ExperienceComponent } from './_Components/experience/experience.component';
import { EducationComponent } from './_Components/education/education.component';
import { ContactUsComponent } from './_Components/contact-us/contact-us.component';
import { RegisterFormComponent } from './_Components/register-form/register-form.component';


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
  {
    path: 'register',
    component: RegisterFormComponent,
  },
  {
    path: 'Skills',
    component: SkillsComponent,
  },
  {
    path: 'Portfolio',
    component: PortfolioComponent,
  },
  {
    path: 'Experience',
    component: ExperienceComponent,
  },
  {
    path: 'Education',
    component: EducationComponent,
  },
  {
    path: 'Contact',
    component: ContactUsComponent,
  },
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: '**', redirectTo: '/Home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
