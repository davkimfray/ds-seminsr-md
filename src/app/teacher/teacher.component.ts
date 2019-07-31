import {AfterViewInit, ChangeDetectorRef, Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {MdbTableDirective, MdbTablePaginationComponent, MdbTableService} from 'angular-bootstrap-md';
import {Observable} from 'rxjs';
import {StudentService} from '../service/student.service';
import {SeminarsService} from '../service/seminars.service';
import {HttpClient} from '@angular/common/http';
import {BackendConfigService} from '../service/backend-config.service';
import {AuthenticationService} from '../service/authentication.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss']
})
export class TeacherComponent implements OnInit {

  panelOpenState = false;

  elements: any = [];
  times: any = [];
  seminars: Observable<any>;
  headElements = ['No.', 'Reg No.', 'Surname', 'Firstname', 'CourseWork', 'Action'];

  profTab = true;
  studTab = false;
  lasTab = false;
  searchText = '';
  previous: string;
  prostate = 'default';
  selectedStudent: string;
  public isProfile = false;

  constructor(private tableService: MdbTableService,
              private studentService: StudentService,
              private seminar: SeminarsService,
              private student: StudentService) {
    for (let i = 7; i <= 18; i++) {
      this.times.push({id: i});
    }
    console.log(this.times);
  }

  ngOnInit() {
    this.fetchdta();
    this.tableService.setDataSource(this.elements);
    this.elements = this.tableService.getDataSource();
    this.previous = this.tableService.getDataSource();
  }


  fetchdta() {
    this.student.getAll().subscribe(
      data => {
        console.log(data);
        this.elements = data;
      }, error1 => {
        console.log(error1);
      }
    );
  }

  @HostListener('input') oninput() {
    this.searchItems();
  }


  searchItems() {
    const prev = this.tableService.getDataSource();

    if (!this.searchText) {
      this.tableService.setDataSource(this.previous);
      this.elements = this.tableService.getDataSource();
    }

    if (this.searchText) {
      this.elements = this.tableService.searchLocalDataBy(this.searchText);
      this.tableService.setDataSource(prev);
    }

  }


  profileToggle(selected) {
    this.selectedStudent = selected;
    if (this.isProfile === true) {
      this.prostate = (this.prostate === 'default' ? 'rotated' : 'default');
      this.isProfile = false;
    } else {
      this.prostate = (this.prostate === 'default' ? 'rotated' : 'default');
      this.isProfile = true;
    }
  }

  getCourse(val) {
  }

  profileTab() {
    this.profTab = true;
    this.studTab = false;
    this.lasTab = false;
  }

  studentTab(val) {
    this.profTab = false;
    this.studTab = true;
    this.lasTab = false;
  }

  lastTab(val) {
    this.profTab = false;
    this.studTab = false;
    this.lasTab = true;
  }
}
