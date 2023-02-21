import { Test, TestingModule } from '@nestjs/testing';
import { AdditionalConfigurationController } from './additional-configuration.controller';
import { AdditionalConfigurationService } from './additional-configuration.service';

describe('AdditionalConfigurationController', () => {
  let controller: AdditionalConfigurationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdditionalConfigurationController],
      providers: [AdditionalConfigurationService],
    }).compile();

    controller = module.get<AdditionalConfigurationController>(
      AdditionalConfigurationController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
