import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Router} from '@angular/router';
import {SeminarsService} from '../../service/seminars.service';
import {StudentService} from '../../service/student.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  elements: Observable<any>;

  headElements = ['ID', 'Course', 'Day', 'Time', 'Capacity', 'Venue', 'Lecturer', 'Register'];


  constructor(private router: Router,
              private seminar: SeminarsService,
              private student: StudentService) {
    console.log(this.student.getAll());
  }

  fetchSeminarData() {
    this.elements = this.seminar.semiarData( /*1, value => {
      if (value*/); /* {


        console.log(this.elements);
*/
    /*  } else {
        console.log('no data');
      }
    });*/
  }

  // createProduct() {

     /*this.elements.subscribe(value => {
       console.log(value);
     }, error1 => {
       console.log(error1);
     });*/
  // console.log(this.http.get(this.ROOT_URL));
  // }

  ngOnInit() {
    this.fetchSeminarData();
  }

}
