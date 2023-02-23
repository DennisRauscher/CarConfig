import { Test, TestingModule } from '@nestjs/testing';

import { AdditionalConfigurationService } from './additional-configuration.service';
import { Repository } from 'typeorm';
import { AdditionalConfiguration } from './entities/additional-configuration.entity';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('AdditionalConfigurationService', () => {
  let service: AdditionalConfigurationService;
  let repo: Repository<AdditionalConfiguration>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AdditionalConfigurationService,
        {
          provide: getRepositoryToken(AdditionalConfiguration),
          useValue: Repository
        }],
    }).compile();

    service = module.get<AdditionalConfigurationService>(
      AdditionalConfigurationService,
    );
    repo = module.get<Repository<AdditionalConfiguration>>(
      getRepositoryToken(AdditionalConfiguration)
    )
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return for findAll', async () => {
    const testEntity: AdditionalConfiguration =  {
      id: 1,
      basePrice: 11,
      name: "test",
      configurations: []
    };
    repo.find = async () => [testEntity];
    expect(await service.findAll()).toEqual([testEntity]);
  });
});
