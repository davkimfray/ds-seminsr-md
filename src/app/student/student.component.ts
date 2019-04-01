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

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  // variable for modal component
  modalRef: MDBModalRef;
  currentUser: User;

  seminars: Observable<any>;

  // state: string;
  prostate = 'default';
  selectedCourse: string;
  userInfo: Observable<any>;
  public isProfile = true;

  profileSelected;
  seminarSelected;

  constructor(private nav: StudentNavigationService,
              private router: Router,
              private seminar: SeminarsService,
              private modalService: MDBModalService,
              private authenticationService: AuthenticationService
              ) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    console.log(this.authenticationService.currentUser.subscribe(x => this.currentUser = x));
    console.log(this.nav.selectedPage);
    this.fetchSeminarData();
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

  // calling the modal service
  // opening RegisterSeminarComponent component
  openRegisterSeminar() {
    this.modalRef = this.modalService.show(RegisterSeminarComponent, {
      backdrop: true,
      keyboard: false,
      focus: true,
      show: false,
      ignoreBackdropClick: true,
      class: 'modal-center modal-lg',
      containerClass: 'right',
      animated: true
    });
  }

  profileToggle() {
    if (this.isProfile == true) {
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
    this.seminars = this.seminar.semiarData();
  }

  ngOnInit() {
    if (this.nav.selectedPage == 'profile') {
      this.profileSelected = this.nav.selectedPage;
      this.seminarSelected = '';
    } else {
      this.profileSelected = '';
      this.seminarSelected = this.nav.selectedPage;
    }
  }

}
