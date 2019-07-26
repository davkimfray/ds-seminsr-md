import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map, tap} from 'rxjs/operators';
import {User} from '../user';
import {BackendConfigService} from './backend-config.service';
import {Router} from '@angular/router';
import {JwtHelperService} from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  alert;

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient,
              private backend: BackendConfigService,
              private router: Router,
              private jwtHelper: JwtHelperService) {
    // this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    //  console.log(localStorage.getItem('currentUser'));
    // this.currentUser = this.currentUserSubject.asObservable();
    // console.log(this.currentUserSubject.asObservable());
  }

  isLoggedIn() {
    const isExpired = this.jwtHelper.isTokenExpired(localStorage.getItem('access_token'));
    if (isExpired) {
      this.logout();
    }
  }
  public get currentUserValue(): boolean {
    // get access_token else return null
    return localStorage.getItem('access_token') !== null;
  }

  login(username: string, password: string) {
    return this.http.post<{ access_token: string, user: User }>(`${this.backend.server_url}/authenticate`, {username, password})
      .pipe(tap(token => {
        // login successful if there is a jwt token in the response
        console.log(token.user);
        localStorage.setItem('access_token', token.access_token);
        localStorage.setItem('user', JSON.stringify(token.user));
        this.alert = false;
        return token;
      }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('access_token');
    localStorage.removeItem('user');
    this.router.navigate(['login']);

    // this.currentUserSubject.next(null);
  }

}
