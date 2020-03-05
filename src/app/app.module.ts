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
    RegisterFormComponent
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
