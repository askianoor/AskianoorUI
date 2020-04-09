import { NgModule } from '@angular/core';
import { AuthGuard } from './_guards/auth.guard';

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
import { DashboardComponent } from './_Components/UserPanel/dashboard/dashboard.component';

import { AdminDashboardComponent } from './_Components/AdminPanel/admin-dashboard/admin-dashboard.component';
import { ManageEducationComponent } from './_Components/AdminPanel/manage-education/manage-education.component';
import { ManageExperienceComponent } from './_Components/AdminPanel/manage-experience/manage-experience.component';
import { ManageNavbarComponent } from './_Components/AdminPanel/manage-navbar/manage-navbar.component';
import { DashboardSettingsComponent } from './_Components/AdminPanel/dashboard-settings/dashboard-settings.component';


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
  {
    path: 'User',
    canActivate: [AuthGuard],
    component: DashboardComponent,
    children: [
      {
        path: '',
        children: [
          { path: 'Dashboard', component: DashboardComponent }
        ],
      }
    ]
  },
  // {
  //   path: 'Admin',
  //   canActivate: [AuthGuard],
  //   component: AdminDashboardComponent,
  //   children: [
  //     {
  //       path: '',
  //       children: [
  //         { path: 'Educations', component: ManageEducationComponent },
  //         { path: 'Experiences', component: ManageExperienceComponent },
  //         { path: 'Navbars', component: ManageNavbarComponent },
  //         { path: 'Portfolios', component: PortfolioComponent },
  //         { path: 'Skills', component: SkillsComponent },
  //         { path: 'Dashboard', component: DashboardSettingsComponent }
  //       ],
  //     }
  //   ]
  // },
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: '**', redirectTo: '/Home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
