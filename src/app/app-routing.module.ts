import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { OfferSeatsComponent } from './offer-seats/offer-seats.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { FormComponent } from './registration/form/form.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"home",component:MainPageComponent},
  {path:"offer-seats",component:OfferSeatsComponent},
  {path:"profile",component:ProfileComponent},
  {path:"sign-up",component:RegistrationComponent},
  {path:"signUpForm",component:FormComponent},
   {path:"*",component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
