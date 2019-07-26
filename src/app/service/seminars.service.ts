import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {BackendConfigService} from './backend-config.service';
import {error} from 'util';
import {publish} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SeminarsService extends BackendConfigService {


  constructor(private http: HttpClient,
              private backend: BackendConfigService) {
    super();
  }

  semiarData(/*cou_year, result: (value: any) => void*/) {
    const params = new HttpParams().set('couYear', '1');
    return this.http.get(this.server_url + '/seminar', {params})/*.subscribe(value => {
        if (value == null) {
          result(null);
        } else {
          result(value);
          // console.log(value);

        }
      }, error1 => {
        result(null);
        console.log(error1);
      }
    )*/;
  }

  regSeminar(studId: number, semId: number, couId: number) {
    return this.http.post(`${this.backend.server_url}/seminar/regSeminar`,
      {studId, semId, couId});
  }

  getByStudentId(id: string) {
    const params = new HttpParams().set('studentId', id);
    return this.http.get(`${this.backend.server_url}/seminar/studentId`, {params});
  }

  getById(id: string) {
    const params = new HttpParams().set('courseId', id);
    return this.http.get(`${this.backend.server_url}/seminar/courseId`, {params});
  }
}
