import { Injectable, NotImplementedException } from '@nestjs/common';
import { CreateAdditionalConfigurationDto } from './dto/create-additional-configuration.dto';
import { UpdateAdditionalConfigurationDto } from './dto/update-additional-configuration.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { AdditionalConfiguration } from './entities/additional-configuration.entity';

@Injectable()
export class AdditionalConfigurationService {
  constructor(
    @InjectRepository(AdditionalConfiguration)
    private additionalConfigurationRepository: Repository<AdditionalConfiguration>,
  ) {}

  create(
    createAdditionalConfigurationDto: CreateAdditionalConfigurationDto,
  ): Promise<AdditionalConfiguration> {
    const newEntity = CreateAdditionalConfigurationDto.toEntity(
      createAdditionalConfigurationDto,
    );

    return this.additionalConfigurationRepository.save(newEntity);
  }

  async findAll(): Promise<AdditionalConfiguration[]> {
    return this.additionalConfigurationRepository.find();
  }

  findOne(id: number): Promise<AdditionalConfiguration> {
    return this.additionalConfigurationRepository.findOneBy({ id: id });
  }

  update(
    id: number,
    updateAdditionalConfigurationDto: UpdateAdditionalConfigurationDto,
  ) {
    throw new NotImplementedException();
  }

  remove(id: number) {
    throw new NotImplementedException();
  }
}
