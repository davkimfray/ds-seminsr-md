import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeminarTeacherComponent } from './seminar-teacher.component';

describe('SeminarTeacherComponent', () => {
  let component: SeminarTeacherComponent;
  let fixture: ComponentFixture<SeminarTeacherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeminarTeacherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeminarTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
