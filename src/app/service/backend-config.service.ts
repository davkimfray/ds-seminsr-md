import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackendConfigService {

 // server_url = 'http://41.86.177.133:3000';
  server_url = 'http://localhost:3000';
  constructor() {
  }
}
