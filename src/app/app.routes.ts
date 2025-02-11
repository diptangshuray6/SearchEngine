import { Routes } from '@angular/router';
import { HomeallComponent } from './homeall/homeall.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SignUpComponent } from './sign-up/sign-up.component';

export const routes: Routes = [
  {path:'homeall',component:HomeallComponent},
  { path: 'about-us', component:AboutUsComponent },
  { path: 'contact-us', component:ContactUsComponent },
  { path: 'signUp', component:SignUpComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];
