import { Injectable, NotImplementedException } from '@nestjs/common';
import { CreatePerformanceConfigurationDto } from './dto/create-performance-configuration.dto';
import { UpdatePerformanceConfigurationDto } from './dto/update-performance-configuration.dto';
import { PerformanceConfiguration } from './entities/performance-configuration.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PerformanceConfigurationService {
  constructor(
    @InjectRepository(PerformanceConfiguration)
    private performanceConfigurationRepository: Repository<PerformanceConfiguration>,
  ) {}

  create(createPerformanceConfigurationDto: CreatePerformanceConfigurationDto) {
    throw new NotImplementedException();
  }

  async findAll(): Promise<PerformanceConfiguration[]> {
    return this.performanceConfigurationRepository.find();
  }

  findOne(id: number): Promise<PerformanceConfiguration> {
    return this.performanceConfigurationRepository.findOneBy({ id: id });
  }

  update(
    id: number,
    updatePerformanceConfigurationDto: UpdatePerformanceConfigurationDto,
  ) {
    throw new NotImplementedException();
  }

  remove(id: number) {
    throw new NotImplementedException();
  }
}
