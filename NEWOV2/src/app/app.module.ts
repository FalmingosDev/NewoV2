import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeheaderComponent } from './home/welcomeheader/welcomeheader.component';
import { HomeModule } from './home/home.module';
import { AuthModule } from './auth/auth.module';
// import { ProfileComponent } from './profile/profile.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeheaderComponent
    // ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    AuthModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
