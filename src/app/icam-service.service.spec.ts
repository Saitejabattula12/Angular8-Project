import { TestBed } from '@angular/core/testing';

import { IcamServiceService } from './icam-service.service';

describe('IcamServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IcamServiceService = TestBed.get(IcamServiceService);
    expect(service).toBeTruthy();
  });
});
