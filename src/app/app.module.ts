import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './student/home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NavbarComponent } from './student/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './footer/footer.component';
import { MakeOrderComponent } from './make-order/make-order.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {HttpClientModule} from '@angular/common/http';
import { FetchStudentComponent } from './fetch-student/fetch-student.component';
import { ProfileComponent } from './student/profile/profile.component';
import { SeminarComponent } from './student/seminar/seminar.component';
import { StudentComponent } from './student/student.component';
import { RegisterSeminarComponent } from './student/register-seminar/register-seminar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactsComponent,
    NavbarComponent,
    FooterComponent,
    MakeOrderComponent,
    LoginComponent,
    RegisterComponent,
    FetchStudentComponent,
    ProfileComponent,
    SeminarComponent,
    StudentComponent,
    RegisterSeminarComponent,
    ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  entryComponents: [ RegisterSeminarComponent ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
