import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {User} from '../user';
import {BackendConfigService} from './backend-config.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  alert;

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient, private backend: BackendConfigService) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    console.log(localStorage.getItem('currentUser'));
    this.currentUser = this.currentUserSubject.asObservable();
    console.log(this.currentUserSubject.asObservable());
  }

  public get currentUserValue(): User {
     return this.currentUserSubject.value;
  }

  login(username: string, password: string) {
    return this.http.post<any>(`${this.backend.server_url}/authenticate`, {username, password})
      .pipe(map(user => {
        // login successful if there is a jwt token in the response
        if (user && user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
          this.alert = false;
          console.log(user);
        }
       /* if (user.status === 401) {
          this.alert = true;
          this.logout();
          location.reload(true);
        }*/
        console.log(JSON.parse(localStorage.getItem('currentUser')));
        return user;
      }));

  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

}
