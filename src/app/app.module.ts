import {BrowserModule} from '@angular/platform-browser';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';

import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HomeComponent} from './student/home/home.component';
import {AboutComponent} from './about/about.component';
import {ContactsComponent} from './contacts/contacts.component';
import {NavbarComponent} from './student/navbar/navbar.component';
import {AppRoutingModule} from './app-routing.module';
import {FooterComponent} from './footer/footer.component';
import {MakeOrderComponent} from './make-order/make-order.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {HttpClientModule} from '@angular/common/http';
import {FetchStudentComponent} from './fetch-student/fetch-student.component';
import {ProfileComponent} from './student/profile/profile.component';
import {SeminarComponent} from './student/seminar/seminar.component';
import {StudentComponent} from './student/student.component';
import {RegisterSeminarComponent} from './student/register-seminar/register-seminar.component';
import {JwtModule} from '@auth0/angular-jwt';
import {TeacherComponent} from './teacher/teacher.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {ViewStudentComponent} from './view-student/view-student.component';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule, MatCheckboxModule,
  MatChipsModule, MatDatepickerModule,
  MatDialogModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule, MatInputModule,
  MatListModule,
  MatMenuModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule, MatRadioModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';
import {StudentDetailsComponent} from './student-details/student-details.component';
import {NavComponent} from './teacher/nav/nav.component';
import {TeacherSidenavComponent} from './teacher/teacher-sidenav/teacher-sidenav.component';
import {SeminarTeacherComponent} from './teacher/seminar-teacher/seminar-teacher.component';



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
    TeacherComponent,
    ViewStudentComponent,
    StudentDetailsComponent,
    NavComponent,
    TeacherSidenavComponent,
    SeminarTeacherComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    // FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatStepperModule,
    MatTabsModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return new Promise(resolve => {
            localStorage.getItem('token');
          });
        },
        whitelistedDomains: ['localhost:3000', '41.86.177.133:3000'],
        blacklistedRoutes: ['http://localhost:3000/login']
      }
    })
  ],
  entryComponents: [RegisterSeminarComponent],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {
}

