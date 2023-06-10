import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutSectionComponent } from './core/about-section/about-section.component';
import { BrandsComponent } from './core/brands/brands.component';
import { CompanyHighlightsComponent } from './core/company-highlights/company-highlights.component';
import { ContactUsComponent } from './core/contact-us/contact-us.component';
import { FooterComponent } from './core/footer/footer.component';
import { HeaderComponent } from './core/header/header.component';
import { HomePageComponent } from './core/home-page/home-page.component';
import { HomeSectionComponent } from './core/home-section/home-section.component';
import { HomeVideoPosterComponent } from './core/home-video-poster/home-video-poster.component';
import { ProjectsComponent } from './core/projects/projects.component';
import { ServicesSectionComponent } from './core/services-section/services-section.component';
import { WelcomeSectionComponent } from './core/welcome-section/welcome-section.component';
import { WhatsAppIconComponent } from './core/whats-app-icon/whats-app-icon.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    HomeVideoPosterComponent,
    FooterComponent,
    ProjectsComponent,
    BrandsComponent,
    HomeSectionComponent,
    ContactUsComponent,
    CompanyHighlightsComponent,
    WelcomeSectionComponent,
    AboutSectionComponent,
    ServicesSectionComponent,
    WhatsAppIconComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
