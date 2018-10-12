import { TestBed } from '@angular/core/testing';

import { BppService } from './bpp.service';

describe('BppService', () => {
  
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BppService = TestBed.get(BppService);
    expect(service).toBeTruthy();
  });

});
