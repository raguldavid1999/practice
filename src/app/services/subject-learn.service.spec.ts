import { TestBed } from '@angular/core/testing';

import { SubjectLearnService } from './subject-learn.service';

describe('SubjectLearnService', () => {
  let service: SubjectLearnService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubjectLearnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
