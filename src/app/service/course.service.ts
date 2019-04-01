import {Injectable} from '@angular/core';
import {BackendConfigService} from './backend-config.service';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Course} from '../course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient, private backend: BackendConfigService) {
  }

  getAll() {
    return this.http.get(`${this.backend.server_url}/course`);
  }

  getById(id: number) {
    let params = new HttpParams().set('couYear', id);
    return this.http.get(`${this.backend.server_url}/course/id`, {params});
  }

  register(course: Course) {
    return this.http.post(`${this.backend.server_url}/course/add`, course);
  }

  update(course: Course) {
    return this.http.put(`${this.backend.server_url}/course/${course.courseId}`, course);
  }

  delete(id: number) {
    return this.http.delete(`${this.backend.server_url}/course/${id}`);
  }
}
