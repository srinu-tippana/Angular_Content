import { TestBed } from '@angular/core/testing';

import { CategoryGuardService } from './category-guard.service';

describe('CategoryGuardService', () => {
  let service: CategoryGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoryGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
