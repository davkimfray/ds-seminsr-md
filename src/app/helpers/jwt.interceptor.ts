/*
import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthenticationService} from '../service/authentication.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private  authenticationService: AuthenticationService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add authorization header with jwt token if available
    let currentUser = this.authenticationService.currentUserValue;
    if (currentUser && currentUser.token) {
      req = req.clone({
        setHeaders: {Authorization: `Bearer ${currentUser.token}`}
      });/!**!/
      console.log(currentUser.token);
    }
    return next.handle(req);
  }

}
*/
