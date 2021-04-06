import { TestBed } from '@angular/core/testing';

import { AfbLibService } from './afb-lib.service';

describe('AfbLibService', () => {
  let service: AfbLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AfbLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
