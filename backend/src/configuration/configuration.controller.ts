import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { NotFoundException } from '@nestjs/common/exceptions';
import { ConfigurationService } from './configuration.service';
import { CreateConfigurationDto } from './dto/create-configuration.dto';
import { UpdateConfigurationDto } from './dto/update-configuration.dto';
import { Configuration } from './entities/configuration.entity';

@Controller('configuration')
export class ConfigurationController {
  constructor(private readonly configurationService: ConfigurationService) { }

  /**
   * endpoint for creation of a Configuration
   * @param CreateConfigurationDto 
   * @returns promise of created Configuration
   */
  @Post()
  create(@Body() createConfigurationDto: CreateConfigurationDto): Promise<Configuration> {
    return this.configurationService.create(createConfigurationDto);
  }

  /**
    * finds all Configuration
    * @returns promise of all found entities
    */
  @Get()
  findAll(): Promise<Configuration[]> {
    return this.configurationService.findAll();
  }

  /**
   * tries to find a Configuration by id
   * @param id Configuration id
   * @returns promise of found Configuration or null
   */
  @Get(':id')
  findOne(@Param('id') id: string): Promise<Configuration> {
    return this.configurationService.findOne(+id);
  }

  /**
   * updates a Configuration with a given updateConfigurationDto
   * @param id id of entity to update
   * @param updateConfigurationDto dto containing the data
   * @returns updated Configuration
   */
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateConfigurationDto: UpdateConfigurationDto,
  ): Promise<Configuration> {
    const foundEntity = this.configurationService.findOne(+id);

    if (!foundEntity) {
      throw new NotFoundException("Entity not found.");
    }

    return this.configurationService.update(+id, updateConfigurationDto);
  }

  /**
   * endpoint to delete a Configuration by id
   * @param id Configuration id to search by
   * @returns void
   */
  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.configurationService.remove(+id);
  }
}
