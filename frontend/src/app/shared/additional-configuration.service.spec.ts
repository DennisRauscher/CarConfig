import { TestBed } from '@angular/core/testing';

import { AdditionalConfigurationService } from './additional-configuration.service';

describe('AdditionalConfigurationService', () => {
  let service: AdditionalConfigurationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdditionalConfigurationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
