import { Test, TestingModule } from '@nestjs/testing';
import { PerformanceConfigurationController } from './performance-configuration.controller';
import { PerformanceConfigurationService } from './performance-configuration.service';

describe('PerformanceConfigurationController', () => {
  let controller: PerformanceConfigurationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PerformanceConfigurationController],
      providers: [PerformanceConfigurationService],
    }).compile();

    controller = module.get<PerformanceConfigurationController>(
      PerformanceConfigurationController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
