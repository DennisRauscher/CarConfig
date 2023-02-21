import { TestBed } from '@angular/core/testing';

import { PerformanceConfigurationService } from './performance-configuration.service';

describe('PerformanceConfigurationService', () => {
  let service: PerformanceConfigurationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PerformanceConfigurationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
