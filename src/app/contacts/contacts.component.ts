import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  contactForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    country: new FormControl(''),
    phoneNo: new FormControl(''),
    message: new FormControl('')
  });
  sendDetails() {
    // console.log( this.contactForm.name.value );
  }

  constructor() { }

  ngOnInit() {
  }

}
