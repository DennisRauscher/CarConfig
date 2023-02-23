import { Controller, Get, NotFoundException, Param } from '@nestjs/common';

import { PerformanceConfiguration } from './entities/performance-configuration.entity';
import { PerformanceConfigurationService } from './performance-configuration.service';

@Controller('performance-configuration')
export class PerformanceConfigurationController {
  constructor(
    private readonly performanceConfigurationService: PerformanceConfigurationService,
  ) {}

  /**
   * finds all PerformanceConfiguration
   * @returns promise of all found entities
   */
  @Get()
  findAll(): Promise<PerformanceConfiguration[]> {
    return this.performanceConfigurationService.findAll();
  }

  /**
   * tries to find a PerformanceConfiguration by id
   * @param id PerformanceConfiguration id
   * @returns promise of found PerformanceConfiguration or null
   */
  @Get(':id')
  findOne(@Param('id') id: string): Promise<PerformanceConfiguration> {
    const foundEntity = this.performanceConfigurationService.findOne(+id);
    
    if(!foundEntity) {
      throw new NotFoundException("Entity not found.");
    }

    return foundEntity;
  }
}
