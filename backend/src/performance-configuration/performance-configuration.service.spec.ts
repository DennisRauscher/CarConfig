import { Test, TestingModule } from '@nestjs/testing';
import { PerformanceConfigurationService } from './performance-configuration.service';

describe('PerformanceConfigurationService', () => {
  let service: PerformanceConfigurationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PerformanceConfigurationService],
    }).compile();

    service = module.get<PerformanceConfigurationService>(
      PerformanceConfigurationService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
