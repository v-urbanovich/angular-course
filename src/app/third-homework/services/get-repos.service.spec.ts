import { TestBed, inject } from '@angular/core/testing';

import { GetReposService } from './get-repos.service';

describe('GetReposService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetReposService]
    });
  });

  it('should be created', inject([GetReposService], (service: GetReposService) => {
    expect(service).toBeTruthy();
  }));
});
