import { Body, Controller, Get, NotFoundException, Param, Post } from '@nestjs/common';

import { AdditionalConfigurationService } from './additional-configuration.service';
import { CreateAdditionalConfigurationDto } from './dto/create-additional-configuration.dto';
import { AdditionalConfiguration } from './entities/additional-configuration.entity';

@Controller('additional-configuration')
export class AdditionalConfigurationController {
  constructor(
    private readonly additionalConfigurationService: AdditionalConfigurationService,
  ) {}

  /**
   * endpoint for creation of a AdditionalConfiguration
   * @param createAdditionalConfigurationDto 
   * @returns promise of created AdditionalConfiguration
   */
  @Post()
  create(
    @Body() createAdditionalConfigurationDto: CreateAdditionalConfigurationDto,
  ): Promise<AdditionalConfiguration> {
    return this.additionalConfigurationService.create(
      createAdditionalConfigurationDto,
    );
  }

  /**
   * finds all AdditionalConfigurations
   * @returns promise of all found entities
   */
  @Get()
  findAll(): Promise<AdditionalConfiguration[]> {
    return this.additionalConfigurationService.findAll();
  }

  /**
   * tries to find a AdditionalConfiguration by id
   * @param id AdditionalConfiguration id
   * @returns promise of found AdditionalConfiguration or null
   */
  @Get(':id')
  findOne(@Param('id') id: string): Promise<AdditionalConfiguration> {
    const foundEntity = this.additionalConfigurationService.findOne(+id);
    
    if(!foundEntity) {
      throw new NotFoundException("Entity not found.");
    }
    return foundEntity;
  }
}
