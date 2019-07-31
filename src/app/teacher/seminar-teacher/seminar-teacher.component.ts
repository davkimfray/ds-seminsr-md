import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-seminar-teacher',
  templateUrl: './seminar-teacher.component.html',
  styleUrls: ['./seminar-teacher.component.scss']
})
export class SeminarTeacherComponent implements OnInit {
  icon: boolean[] = [false];
  items = [1, 2, 3, 4, 5, 6, 7, 8];
  panelOpenState: boolean[] = [false];

  constructor() {
  }

  ngOnInit() {
  }


  click(value) {
    this.icon[value] = !this.icon[value];
    this.panelOpenState[value] = !this.panelOpenState[value];
  }
}
