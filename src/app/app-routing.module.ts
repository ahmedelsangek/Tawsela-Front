import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import { MainPageComponent } from './main-page/main-page.component';
import { OfferSeatsComponent } from './offer-seats/offer-seats.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { PublishFormComponent } from './publish-form/publish-form.component';
import { FormComponent } from './registration/form/form.component';
import { RegistrationComponent } from './registration/registration.component';
import { DateComponent } from './search-car-sharing/date/date.component';
import { PassengersComponent } from './search-car-sharing/passengers/passengers.component';
import { SearchCarSharingComponent } from './search-car-sharing/search-car-sharing.component';

const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"home",component:MainPageComponent},
  {path:"offer-seats",component:OfferSeatsComponent},
  {path:"profile",component:ProfileComponent},
  {path:"sign-up",component:RegistrationComponent},
  {path:"signUpForm",component:FormComponent},
  {path:"login",component:LogInComponent},
  {path:"publishForm",component:PublishFormComponent},
  {path:"search",component:SearchCarSharingComponent},
  {path:"date",component:DateComponent},
  {path:"passengers",component:PassengersComponent},
  {path:"*",component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
