import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeheaderComponent } from './home/welcomeheader/welcomeheader.component';
import { WelcomefooterComponent } from './home/welcomefooter/welcomefooter.component';
import { HomeModule } from './home/home.module';
// import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeheaderComponent,
    WelcomefooterComponent,
    // ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
