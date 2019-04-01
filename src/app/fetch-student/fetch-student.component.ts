import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fetch-student',
  templateUrl: './fetch-student.component.html',
  styleUrls: ['./fetch-student.component.scss']
})
export class FetchStudentComponent implements OnInit {

  elements: any = [
    {id: 1, first: 'Mark', last: 'Otto', handle: '@mdo'},
    {id: 2, first: 'Jacob', last: 'Thornton', handle: '@fat'},
    {id: 3, first: 'Larry', last: 'the Bird', handle: '@twitter'},
  ];

  headElements = ['ID', 'First', 'Last', 'Handle', 'Operation'];

  constructor() { }

  ngOnInit() {
  }

}
