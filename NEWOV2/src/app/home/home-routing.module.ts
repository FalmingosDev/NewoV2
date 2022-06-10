import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { GalleryComponent } from './gallery/gallery.component';
import { OtpComponent } from './otp/otp.component';
import { PaynowComponent } from './paynow/paynow.component';
import { ProfileComponent } from './profile/profile.component';
// import { ProfileComponent } from './profile/profile.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path: '',component: WelcomeComponent},
  {path: '/gallery',component: GalleryComponent},
  // {path: 'profile',component: ProfileComponent}
  {path: '/paynow',component: PaynowComponent},
  {path: '/editprofile',component: EditprofileComponent},
  {path: '/changepassword',component: ChangepasswordComponent},
  {path: '/otp',component: OtpComponent},
  {path: '/profile',component: ProfileComponent}  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
