import { Test, TestingModule } from '@nestjs/testing';
import { ColorConfigurationController } from './color-configuration.controller';
import { ColorConfigurationService } from './color-configuration.service';

describe('ColorConfigurationController', () => {
  let controller: ColorConfigurationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ColorConfigurationController],
      providers: [ColorConfigurationService],
    }).compile();

    controller = module.get<ColorConfigurationController>(
      ColorConfigurationController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
