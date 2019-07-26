import {Component, OnInit} from '@angular/core';
import {MDBModalRef} from 'angular-bootstrap-md';
import {SeminarsService} from '../../service/seminars.service';
import {Observable} from 'rxjs';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CourseService} from '../../service/course.service';
import {CollegeService} from '../../service/college.service';
import {first} from 'rxjs/operators';
import {Router} from '@angular/router';
import {StudentComponent} from '../student.component';
import {AuthenticationService} from '../../service/authentication.service';

@Component({
  selector: 'app-register-seminar',
  templateUrl: './register-seminar.component.html',
  styleUrls: ['./register-seminar.component.scss']
})
export class RegisterSeminarComponent implements OnInit {

  registerSeminarForm: FormGroup;
  seminars: Observable<any>;
  courses: Observable<any>;
  registered: any = {};
  selectedCourse: string;
  selectedCourseName: any = {};
  userId =  JSON.parse(localStorage.getItem('user'))[0].studentId;

  constructor(private seminarServices: SeminarsService,
             // public modalRef: MDBModalRef,
              private courseServices: CourseService,
              private collegeServices: CollegeService,
              private formBuilder: FormBuilder,
              private auth: AuthenticationService) {
    // this.auth.isLoggedIn();
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.registerSeminarForm.controls;
  }

  getCourses() {
    this.registered.status = '';
    this.courses = this.courseServices.getById(this.f.couYear.value);
    this.seminars = null;
  }

  getSeminars() {
    this.registered.status = '';
    this.selectedCourseName = this.f.course.value.cou_name;
    this.seminars = this.seminarServices.getById(this.f.course.value.courseId);
  }

  registerSeminar(sem) {
    this.seminarServices.regSeminar(this.userId, sem, this.f.course.value.courseId)
      .subscribe(data => {
          this.registered = data;
          if (this.registered.status === 200) {
            // refresh page if successful
            window.location.reload();
          } else {
            this.selectedCourse = '';
          }
        },
        error => {
          console.log(error);
        });
  }

  seminarToggle(val) {
    this.selectedCourse = val;
  }

  ngOnInit() {
    this.registerSeminarForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      midName: [],
      gender: ['', Validators.required],
      surName: ['', Validators.required],
      couYear: ['', Validators.required],
      course: ['', Validators.required]
    });
  }
}
