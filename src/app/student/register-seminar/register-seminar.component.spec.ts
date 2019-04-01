import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterSeminarComponent } from './register-seminar.component';

describe('RegisterSeminarComponent', () => {
  let component: RegisterSeminarComponent;
  let fixture: ComponentFixture<RegisterSeminarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterSeminarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterSeminarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
