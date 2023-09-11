import { TestBed } from '@angular/core/testing';

import { QuestionLoadingService } from './question-loading.service';

describe('QuestionLoadingService', () => {
  let service: QuestionLoadingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestionLoadingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
