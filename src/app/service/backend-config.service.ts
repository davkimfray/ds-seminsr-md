import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackendConfigService {

  server_url = 'http://localhost:3000';
  constructor() {
  }
}
