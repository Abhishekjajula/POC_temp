import { TestBed } from '@angular/core/testing';

import { GetorderbycityService } from './getorderbycity.service';

describe('GetorderbycityService', () => {
  let service: GetorderbycityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetorderbycityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
