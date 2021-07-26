import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import { FormComponent } from './registration/form/form.component';
import { OfferSeatsComponent } from './offer-seats/offer-seats.component';
import { HeaderDivComponent } from './offer-seats/header-div/header-div.component';
import { CarPoolingComponent } from './offer-seats/car-pooling/car-pooling.component';
import { CommentDivComponent } from './offer-seats/comment-div/comment-div.component';
import { VideoDivComponent } from './offer-seats/video-div/video-div.component';
import { GrayDivComponent } from './offer-seats/gray-div/gray-div.component';
import { HelpCenterDivComponent } from './offer-seats/help-center-div/help-center-div.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
<<<<<<< Updated upstream
import { LogInComponent } from './log-in/log-in.component';
<<<<<<< Updated upstream
=======
import { PublishFormComponent } from './publish-form/publish-form.component';
>>>>>>> Stashed changes
=======
import { SearchCarSharingComponent } from './search-car-sharing/search-car-sharing.component';
import { DateComponent } from './search-car-sharing/date/date.component';
import { PassengersComponent } from './search-car-sharing/passengers/passengers.component';
>>>>>>> Stashed changes

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    RegistrationComponent,
    FormComponent,
    OfferSeatsComponent,
    HeaderDivComponent,
    CarPoolingComponent,
    CommentDivComponent,
    VideoDivComponent,
    GrayDivComponent,
    HelpCenterDivComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
<<<<<<< Updated upstream
<<<<<<< Updated upstream
    LogInComponent
=======
    PublishFormComponent
>>>>>>> Stashed changes
=======
    LogInComponent,
    SearchCarSharingComponent,
    DateComponent,
    PassengersComponent
>>>>>>> Stashed changes
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
