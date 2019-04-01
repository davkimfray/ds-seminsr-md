import {Component, OnInit, Input} from '@angular/core';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {SeminarsService} from '../../service/seminars.service';

@Component({
  selector: 'app-seminar',
  templateUrl: './seminar.component.html',
  styleUrls: ['./seminar.component.scss']
})

export class SeminarComponent implements OnInit {

  @Input() seminar: Observable<any> = null;

  isSeminar = true;
  seminars: Observable<any>;

  headElements = ['ID', 'Course', 'Day', 'Time', 'Capacity', 'Venue', 'Lecturer', 'Register'];


  constructor(private router: Router) {
  }


  fetchSminarData() {

    // this.elements = this.seminar.semiarData();
  }

  // createProduct() {

  /*   this.elements.subscribe(value => {
       console.log(value);
     }, error1 => {
       console.log(error1);
     });*/
  // console.log(this.http.get(this.ROOT_URL));
  // }

  ngOnInit() {
    // this.fetchSeminarData();
  }


}
