import { TestBed } from '@angular/core/testing';

import { StadiumService } from './stadium-service.service';

describe('StadiumServiceService', () => {
  let service: StadiumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StadiumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
