import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularTiltModule } from 'angular-tilt';

import { AppComponent } from './app.component';
import { HomepageComponent } from './_Components/homepage/homepage.component';
import { AboutMeComponent } from './_Components/about-me/about-me.component';
import { PortfolioComponent } from './_Components/portfolio/portfolio.component';
import { NavbarComponent } from './_Components/navbar/navbar.component';
import { SkillsComponent } from './_Components/skills/skills.component';
import { SlideshowComponent } from './_Components/slideshow/slideshow.component';
import { ExperienceComponent } from './_Components/experience/experience.component';
import { EducationComponent } from './_Components/education/education.component';
import { ContactUsComponent } from './_Components/contact-us/contact-us.component';
import { LoginComponent } from './_Components/login/login.component';
import { GlitchComponent } from './_Components/glitch/glitch.component';
import { RegisterFormComponent } from './_Components/register-form/register-form.component';
import { FooterComponent } from './_Components/footer/footer.component';
import { DashboardComponent } from './_Components/UserPanel/dashboard/dashboard.component';

import { AdminDashboardComponent } from './_Components/AdminPanel/admin-dashboard/admin-dashboard.component';
import { DashboardSettingsComponent } from './_Components/AdminPanel/dashboard-settings/dashboard-settings.component';
import { ManageSkillsComponent } from './_Components/AdminPanel/manage-skills/manage-skills.component';
import { ManageEducationComponent } from './_Components/AdminPanel/manage-education/manage-education.component';
import { ManageExperienceComponent } from './_Components/AdminPanel/manage-experience/manage-experience.component';
import { ManageNavbarComponent } from './_Components/AdminPanel/manage-navbar/manage-navbar.component';
import { ManagePortfolioComponent } from './_Components/AdminPanel/manage-portfolio/manage-portfolio.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AboutMeComponent,
    PortfolioComponent,
    NavbarComponent,
    SkillsComponent,
    SlideshowComponent,
    ExperienceComponent,
    EducationComponent,
    ContactUsComponent,
    LoginComponent,
    GlitchComponent,
    RegisterFormComponent,
    FooterComponent,
    DashboardComponent,
    DashboardSettingsComponent,
    ManageSkillsComponent,
    ManageEducationComponent,
    ManageExperienceComponent,
    ManageNavbarComponent,
    ManagePortfolioComponent,
    AdminDashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    AngularTiltModule
  ],
  providers: [NavbarComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
