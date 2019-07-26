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

  public chartType = 'pie';

  public chartDatasets: Array<any> = [
    {data: [18, 13, 4, 5], label: 'My First dataset'}
  ];

  public chartLabels: Array<any> = ['Test', 'Essay', 'Attendance', 'Lost'];

  public chartColors: Array<any> = [
    {
      backgroundColor: ['#F7464A', '#46BFBD', '#FDB45C', '#949FB1'],
      hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#FFC870', '#A8B3C5'],
      borderWidth: 2,
    }
  ];

  public chartOptions: any = {
    responsive: true
  };


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
