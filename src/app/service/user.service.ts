import {Injectable} from '@angular/core';
import {BackendConfigService} from './backend-config.service';
import {HttpClient} from '@angular/common/http';
import {User} from '../user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private backend: BackendConfigService) {
  }

  getAll() {
    return this.http.get<User[]>(`${this.backend.server_url}/users`);
  }

  getById(id: number) {
    return this.http.get(`${this.backend.server_url}/user/${id}`);
  }

  register(user: User) {
    return this.http.post(`${this.backend.server_url}/user/register`, user);
  }

  update(user: User) {
    return this.http.put(`${this.backend.server_url}/user/${user.userId}`, user);
  }

  delete(id: number) {
    return this.http.delete(`${this.backend.server_url}/user/${id}`);
  }
}
