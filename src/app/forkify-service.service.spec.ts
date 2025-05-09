import { TestBed } from '@angular/core/testing';

import { ForkifyServiceService } from './forkify-service.service';

describe('ForkifyServiceService', () => {
  let service: ForkifyServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForkifyServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
