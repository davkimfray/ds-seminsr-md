import {Component, OnInit} from '@angular/core';
import {MDBModalRef} from 'angular-bootstrap-md';
import {SeminarsService} from '../../service/seminars.service';
import {Observable} from 'rxjs';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CourseService} from '../../service/course.service';
import {CollegeService} from '../../service/college.service';

@Component({
  selector: 'app-register-seminar',
  templateUrl: './register-seminar.component.html',
  styleUrls: ['./register-seminar.component.scss']
})
export class RegisterSeminarComponent implements OnInit {

  registerSeminarForm: FormGroup;
  seminars: Observable<any>;
  courses: Observable<any>;
  elements: Observable<any>;
  selectedCourse: string;

  l
  constructor(private seminarServices: SeminarsService,
              public modalRef: MDBModalRef,
              private courseServices: CourseService,
              private collegeServices: CollegeService,
              private formBuilder: FormBuilder) {
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.registerSeminarForm.controls;
  }

  getCourses() {
    this.courses = this.courseServices.getById(this.f.couYear.value);
    console.log(this.f.couYear.value);
  }

  getSeminars() {
    this.seminars = this.seminarServices.getById(this.f.course.value);
    console.log(this.f.course.value);
  }

  registerSeminar(val) {
  console.log(val);
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
