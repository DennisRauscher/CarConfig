import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateColorConfigurationDto } from './dto/create-color-configuration.dto';
import { ColorConfiguration } from './entities/color-configuration.entity';

@Injectable()
export class ColorConfigurationService {
  constructor(
    @InjectRepository(ColorConfiguration)
    private colorConfigurationRepository: Repository<ColorConfiguration>,
  ) {}

  /**
   * creates a CreateColorConfigurationDto in the database
   * @param CreateColorConfigurationDto 
   * @returns Promise for created CreateColorConfigurationDto
   */
  create(
    createColorConfigurationDto: CreateColorConfigurationDto,
  ): Promise<ColorConfiguration> {
    const newEntity = CreateColorConfigurationDto.toEntity(
      createColorConfigurationDto,
    );
    return this.colorConfigurationRepository.save(newEntity);
  }

  /**
   * finds all ColorConfiguration-Entities and returns them
   * @returns promise of array of all ColorConfigurations
   */
  async findAll(): Promise<ColorConfiguration[]> {
    return this.colorConfigurationRepository.find();
  }

  /**
   * finds one ColorConfiguration by id
   * @param id id of ColorConfiguration entity
   * @returns promise of found ColorConfiguration
   */
  findOne(id: number): Promise<ColorConfiguration | null> {
    return this.colorConfigurationRepository.findOneBy({ id: id });
  }
}
