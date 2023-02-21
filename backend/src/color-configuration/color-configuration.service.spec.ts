import { Test, TestingModule } from '@nestjs/testing';
import { ColorConfigurationService } from './color-configuration.service';

describe('ColorConfigurationService', () => {
  let service: ColorConfigurationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ColorConfigurationService],
    }).compile();

    service = module.get<ColorConfigurationService>(ColorConfigurationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
