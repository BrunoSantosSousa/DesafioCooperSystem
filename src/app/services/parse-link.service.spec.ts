import { TestBed } from '@angular/core/testing';

import { ParseLinkService } from './parse-link.service';

describe('ParseLinkService', () => {
  let service: ParseLinkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParseLinkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
