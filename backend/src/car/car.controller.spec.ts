import { Test, TestingModule } from '@nestjs/testing';
import { CarController } from './car.controller';
import { CarService } from './car.service';
import { Car } from './entities/car.entity';

describe('CarController', () => {
  let controller: CarController;
  let service: CarService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CarController],
      providers: [{
        provide: CarService,
        useValue: {
          findAll: jest.fn(() => {}),
          findOne: jest.fn(() => {})
        }
      }],
    }).compile();

    controller = module.get<CarController>(CarController);
    service = module.get(CarService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
