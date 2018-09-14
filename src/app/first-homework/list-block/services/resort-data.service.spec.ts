import { TestBed, inject } from '@angular/core/testing';

import { ResortDataService } from './resort-data.service';

describe('ResortDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResortDataService]
    });
  });

  it('should be created', inject([ResortDataService], (service: ResortDataService) => {
    expect(service).toBeTruthy();
  }));
});
