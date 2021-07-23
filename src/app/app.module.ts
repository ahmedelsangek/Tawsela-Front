import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from '../profile/profile.component';
import { FormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import { FormComponent } from './registration/form/form.component';
import { EmailComponent } from './registration/form/email/email.component';
import { NameComponent } from './registration/form/name/name.component';
import { DateComponent } from './registration/form/date/date.component';
import { GenderComponent } from './registration/form/gender/gender.component';
import { PasswordComponent } from './registration/form/password/password.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    RegistrationComponent,
    FormComponent,
    EmailComponent,
    NameComponent,
    DateComponent,
    GenderComponent,
    PasswordComponent
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
