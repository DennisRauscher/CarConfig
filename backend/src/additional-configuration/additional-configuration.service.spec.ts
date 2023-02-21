import { Test, TestingModule } from '@nestjs/testing';
import { AdditionalConfigurationService } from './additional-configuration.service';

describe('AdditionalConfigurationService', () => {
  let service: AdditionalConfigurationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AdditionalConfigurationService],
    }).compile();

    service = module.get<AdditionalConfigurationService>(
      AdditionalConfigurationService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
