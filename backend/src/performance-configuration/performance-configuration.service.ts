import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { PerformanceConfiguration } from './entities/performance-configuration.entity';

@Injectable()
export class PerformanceConfigurationService {
  constructor(
    @InjectRepository(PerformanceConfiguration)
    private performanceConfigurationRepository: Repository<PerformanceConfiguration>,
  ) {}
  
  /**
   * finds all PerformanceConfiguration-Entities and returns them
   * @returns promise of array of all PerformanceConfiguration
   */
  async findAll(): Promise<PerformanceConfiguration[]> {
    return this.performanceConfigurationRepository.find();
  }

  /**
   * finds one PerformanceConfiguration by id
   * @param id id of PerformanceConfiguration entity
   * @returns promise of found PerformanceConfiguration
   */
  findOne(id: number): Promise<PerformanceConfiguration | null> {
    return this.performanceConfigurationRepository.findOneBy({ id: id });
  }
}
