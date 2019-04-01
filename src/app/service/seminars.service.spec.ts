import { TestBed } from '@angular/core/testing';

import { SeminarsService } from './seminars.service';

describe('SeminarsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SeminarsService = TestBed.get(SeminarsService);
    expect(service).toBeTruthy();
  });
});
