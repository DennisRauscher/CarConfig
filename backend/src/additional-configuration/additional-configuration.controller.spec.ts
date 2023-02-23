import { Test, TestingModule } from '@nestjs/testing';

import { AdditionalConfigurationController } from './additional-configuration.controller';
import { AdditionalConfigurationService } from './additional-configuration.service';
import { CreateAdditionalConfigurationDto } from './dto/create-additional-configuration.dto';
import { AdditionalConfiguration } from './entities/additional-configuration.entity';
import { NotFoundException } from '@nestjs/common';

describe('AdditionalConfigurationController', () => {
  let controller: AdditionalConfigurationController;
  let service: AdditionalConfigurationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdditionalConfigurationController],
      providers: [{
        provide: AdditionalConfigurationService,
        useValue: {
          create: jest.fn(() => {}),
          findAll: jest.fn(() => {}),
          findOne: jest.fn(() => {})
        }
      }],
    }).compile();

    controller = module.get<AdditionalConfigurationController>(
      AdditionalConfigurationController,
    );
    service = module.get(AdditionalConfigurationService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });


  it('should create a entity with valid data', () => {  
    const mockAdditionalConfigurationDto: CreateAdditionalConfigurationDto = {
      name: "test",
      basePrice: 10
    };
    controller.create(mockAdditionalConfigurationDto);
    expect(service.create).toBeCalled();
  });

  it('findAll should fail with invalid id', () => {
    controller.findAll();
    expect(service.findAll).toThrow();
  });

  it('findOne should return the entity from the service', async () => {
    const mockResult: AdditionalConfiguration = {
      id: 1,
      basePrice: 11,
      configurations: [],
      name: "test"
    };

    service.findOne = async () => mockResult;
    
    expect(await controller.findOne("1")).toEqual(mockResult);
  });

  it('findOne should fail with invalid id', () => {
    service.findOne = () => null;
    
    expect(() => controller.findOne("1")).toThrow();
  });

  it('findOne should fail with invalid id (string)', () => {
    service.findOne = () => null;
    
    expect(() => controller.findOne("x")).toThrow();
  });
});
