import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';
import {AuthenticationService} from '../service/authentication.service';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  alert;
  posts: Observable<any>;
  user: string;
  pass: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private authenticationService: AuthenticationService,
              public fb: FormBuilder,
              private http: HttpClient) {
    this.alert = this.authenticationService.alert;
    // redirect to home if already logged in
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/student']);
    }
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    // get return url from  route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/student';
    console.log(this.returnUrl);
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    /*this.authenticationService.login(this.f.username.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate([this.returnUrl]);
        },
        error => {
          console.log(error);
          this.alert = true;
          this.loading = false;

        });*/
    this.authenticationService.login(this.f.username.value, this.f.password.value)
      .subscribe(
        data => {
          this.router.navigate([this.returnUrl]);
        },
        error => {
          console.log(error);
          this.alert = true;
          this.loading = false;

        });
  }

  /*
    getPosts() {
      let params = new HttpParams().set('username', this.user);

      /!*
          this.posts = this.http.get(this.ROOT_URL, {params});
      *!/

      this.posts.subscribe(value => {
        console.log(value);
      }, error1 => {
        console.log(error1);
      });
      // console.log(this.http.get(this.ROOT_URL));
    }

    // login method
    loginConf() {
      /!*if (this.username.match('aa')) {
        if ( this.password.match( 'aa')) {
          this.router.navigate(['/', 'Home']);
        }
      } else {
        // gdhdfghdfg
      }*!/
      this.getPosts();
    }
  */

  // open register form
  openSignup() {
    this.router.navigateByUrl('register').catch(reason => {
      console.log(reason);
    });
  }

  get pasword() {
    return this.loginForm.get('password');
  }


}
