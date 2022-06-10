import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GalleryComponent } from './gallery/gallery.component';
import { PaynowComponent } from './paynow/paynow.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { OtpComponent } from './otp/otp.component';
import { ProfileComponent } from './profile/profile.component';
import { WelcomefooterComponent } from './welcomefooter/welcomefooter.component';
// import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    WelcomeComponent,
    GalleryComponent,
    PaynowComponent,
    EditprofileComponent,
    ChangepasswordComponent,
    OtpComponent,
    ProfileComponent,
    WelcomefooterComponent
    // ProfileComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
    BrowserAnimationsModule,
    HomeRoutingModule,
    
  ]
})
export class HomeModule { }
