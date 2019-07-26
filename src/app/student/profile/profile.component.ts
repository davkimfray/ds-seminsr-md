import { Component, OnInit } from '@angular/core';
import {User} from '../../user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  currentUser: User;
  constructor() {
    this.currentUser = JSON.parse(localStorage.getItem('user'));
    this.currentUser = this.currentUser[0];
  }

  ngOnInit() {
  }

}
