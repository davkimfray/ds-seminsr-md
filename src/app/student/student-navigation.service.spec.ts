import { TestBed } from '@angular/core/testing';

import { StudentNavigationService } from './student-navigation.service';

describe('StudentNavigationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudentNavigationService = TestBed.get(StudentNavigationService);
    expect(service).toBeTruthy();
  });
});
