import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './student/home/home.component';
import {AboutComponent} from './about/about.component';
import {LoginComponent} from './login/login.component';
import {ContactsComponent} from './contacts/contacts.component';
import {RegisterComponent} from './register/register.component';
import {ProfileComponent} from './student/profile/profile.component';
import {SeminarComponent} from './student/seminar/seminar.component';
import {StudentComponent} from './student/student.component';
import {AuthGuard} from './auth.guard';




const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'student', component: StudentComponent },
  { path: 'student/profile', component: ProfileComponent },
  { path: 'student/seminar', component: SeminarComponent },
  { path: 'About Us', component: AboutComponent },
  { path: 'Contact', component: ContactsComponent },
  { path: '', component: StudentComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '' }

];



@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})




export class AppRoutingModule {}
