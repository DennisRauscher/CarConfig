import { Body, Controller, Get, NotFoundException, Param, Post } from '@nestjs/common';

import { ColorConfigurationService } from './color-configuration.service';
import { CreateColorConfigurationDto } from './dto/create-color-configuration.dto';
import { ColorConfiguration } from './entities/color-configuration.entity';

@Controller('color-configuration')
export class ColorConfigurationController {
  constructor(
    private readonly colorConfigurationService: ColorConfigurationService,
  ) {}

  /**
   * endpoint for creation of a ColorConfiguration
   * @param CreateColorConfigurationDto 
   * @returns promise of created ColorConfiguration
   */
  @Post()
  create(@Body() createColorConfigurationDto: CreateColorConfigurationDto): Promise<ColorConfiguration> {
    return this.colorConfigurationService.create(createColorConfigurationDto);
  }

  /**
   * finds all ColorConfigurations
   * @returns promise of all found entities
   */
  @Get()
  findAll(): Promise<ColorConfiguration[]> {
    return this.colorConfigurationService.findAll();
  }

  /**
   * tries to find a ColorConfiguration by id
   * @param id ColorConfiguration id
   * @returns promise of found ColorConfiguration or null
   */
  @Get(':id')
  findOne(@Param('id') id: string): Promise<ColorConfiguration> {
    const foundEntity = this.colorConfigurationService.findOne(+id);
    
    if(!foundEntity) {
      throw new NotFoundException("Entity not found.");
    }

    return this.colorConfigurationService.findOne(+id);
  }
}
