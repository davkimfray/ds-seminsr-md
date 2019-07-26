import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {first} from 'rxjs/operators';
import {UserService} from '../service/user.service';
import {CollegeService} from '../service/college.service';
import {Observable} from 'rxjs';
import {CourseService} from '../service/course.service';

@Component({
  selector: 'app-signup',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registrationForm: FormGroup;
  submitted = false;
 colleges: Observable<any>;
  courses: Observable<any>;
 // selectedCollege: number;

  constructor(private router: Router,
              private userServices: UserService,
              private collegeServices: CollegeService,
              private courseServices: CourseService,
              private formBuilder: FormBuilder) {

    this.colleges = this.collegeServices.getAll();
  }

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      regNo: ['', Validators.required],
      firstName: ['', Validators.required],
      midName: [],
      gender: ['', Validators.required],
      surName: ['', Validators.required],
      college: ['', Validators.required],
      password: ['', [Validators.required,  Validators.minLength(6)]],
      confirmPass: ['', Validators.required]
    });
   // this.college = this.collegeService.getAll();


  }

  openlogin() {
    this.router.navigateByUrl('login').catch(reason => {
      console.log(reason);
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.registrationForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registrationForm.invalid) {
      console.log(this.registrationForm.invalid);
      return;
    }
    this.userServices.register(this.registrationForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['login']);
        },
        error => {
          console.log(error);
          /*his.alert = true;
          this.loading = false;*/

        });
  }

}
