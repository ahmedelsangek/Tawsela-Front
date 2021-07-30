import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

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
import { LogInComponent } from './log-in/log-in.component';
import { PublishFormComponent } from './publish-form/publish-form.component';
import { SearchCarSharingComponent } from './search-car-sharing/search-car-sharing.component';
import { DateComponent } from './search-car-sharing/date/date.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

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
    LogInComponent,
    PublishFormComponent,
    LogInComponent,
    SearchCarSharingComponent,
    DateComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    CommonModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
