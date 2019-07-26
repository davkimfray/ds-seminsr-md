import {Component, OnInit} from '@angular/core';
import {StudentNavigationService} from './student-navigation.service';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {Router} from '@angular/router';
import {SeminarsService} from '../service/seminars.service';
import {Observable} from 'rxjs';
import {SeminarComponent} from './seminar/seminar.component';
import {MDBModalRef, MDBModalService} from 'angular-bootstrap-md';
import {RegisterSeminarComponent} from './register-seminar/register-seminar.component';
import {User} from '../user';
import {AuthenticationService} from '../service/authentication.service';
import {StudentService} from '../service/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  // variable for modal component
  currentUser: User;

  seminars: Observable<any>;

  // state: string;
  prostate = 'default';
  selectedCourse: string;
  isRegisterSeminar = false;
  public isProfile = true;

  profileSelected;
  seminarSelected;

  constructor(private nav: StudentNavigationService,
              private router: Router,
              private seminar: SeminarsService,
              private authenticationService: AuthenticationService) {
   // this.authenticationService.currentUser.subscribe(x => this.currentUser = x);

    this.authenticationService.isLoggedIn();
    this.currentUser = JSON.parse(localStorage.getItem('user'));

    this.fetchSeminarData();
  }
  // calling the modal service
  // opening RegisterSeminarComponent component
  openRegisterSeminar() {
    if (this.isRegisterSeminar === true) {
      this.isRegisterSeminar = false;
    } else {
      this.isRegisterSeminar = true;
    }
    /*this.modalRef = this.modalService.show(RegisterSeminarComponent, {
      backdrop: true,
      keyboard: false,
      focus: true,
      show: false,
      ignoreBackdropClick: true,
      class: 'modal-dialog modal-dialog-scrollable modal-center modal-lg',
      containerClass: 'right',
      animated: true
    });*/
  }

  profileToggle() {
    if (this.isProfile === true) {
      this.prostate = (this.prostate === 'default' ? 'rotated' : 'default');
      this.isProfile = false;
    } else {
      this.prostate = (this.prostate === 'default' ? 'rotated' : 'default');
      this.isProfile = true;
    }
  }

  seminarToggle(val) {
    this.selectedCourse = val;
   }

  fetchSeminarData() {
    this.seminars = this.seminar.getByStudentId(this.currentUser[0].studentId);
  }

  ngOnInit() {
    if (this.nav.selectedPage === 'profile') {
      this.profileSelected = this.nav.selectedPage;
      this.seminarSelected = '';
    } else {
      this.profileSelected = '';
      this.seminarSelected = this.nav.selectedPage;
    }
  }

}
