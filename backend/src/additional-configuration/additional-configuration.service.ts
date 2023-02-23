import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateAdditionalConfigurationDto } from './dto/create-additional-configuration.dto';
import { AdditionalConfiguration } from './entities/additional-configuration.entity';

@Injectable()
export class AdditionalConfigurationService {
  constructor(
    @InjectRepository(AdditionalConfiguration)
    private additionalConfigurationRepository: Repository<AdditionalConfiguration>,
  ) {}

  /**
   * creates a AdditionalConfiguration in the database
   * @param createAdditionalConfigurationDto 
   * @returns Promise for created AdditionalConfiguration
   */
  create(
    createAdditionalConfigurationDto: CreateAdditionalConfigurationDto,
  ): Promise<AdditionalConfiguration> {
    const newEntity = CreateAdditionalConfigurationDto.toEntity(
      createAdditionalConfigurationDto,
    );

    return this.additionalConfigurationRepository.save(newEntity);
  }

  /**
   * finds all AdditionalConfiguration-Entities and returns them
   * @returns promise of array of all AdditionalConfigurations
   */
  async findAll(): Promise<AdditionalConfiguration[]> {
    return this.additionalConfigurationRepository.find();
  }

  /**
   * finds one AdditionalConfiguration by id
   * @param id id of AdditionalConfiguration entity
   * @returns promise of found AdditionalConfiguration
   */
  findOne(id: number): Promise<AdditionalConfiguration | null> {
    return this.additionalConfigurationRepository.findOneBy({ id: id });
  }
}
