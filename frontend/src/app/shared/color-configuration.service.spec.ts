import { TestBed } from '@angular/core/testing';

import { ColorConfigurationService } from './color-configuration.service';

describe('ColorConfigurationService', () => {
  let service: ColorConfigurationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColorConfigurationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
