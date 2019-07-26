import {Injectable} from '@angular/core';
import {BackendConfigService} from './backend-config.service';
import {HttpClient} from '@angular/common/http';
import {College} from '../college';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient, private backend: BackendConfigService) {
  }

  getAll() {
    return this.http.get(`${this.backend.server_url}/student/all`);
  }

  getById(id: number) {
    return this.http.get(`${this.backend.server_url}/college/${id}`);
  }

  register(college: College) {
    return this.http.post(`${this.backend.server_url}/college/add`, college);
  }

  update(college: College) {
    return this.http.put(`${this.backend.server_url}/college/${college.collegeId}`, college);
  }

  delete(id: number) {
    return this.http.delete(`${this.backend.server_url}/college/${id}`);
  }
}
