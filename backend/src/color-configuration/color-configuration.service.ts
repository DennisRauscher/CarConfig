import { Injectable, NotImplementedException } from '@nestjs/common';
import { CreateColorConfigurationDto } from './dto/create-color-configuration.dto';
import { UpdateColorConfigurationDto } from './dto/update-color-configuration.dto';
import { ColorConfiguration } from './entities/color-configuration.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ColorConfigurationService {
  constructor(
    @InjectRepository(ColorConfiguration)
    private colorConfigurationRepository: Repository<ColorConfiguration>,
  ) {}

  create(
    createColorConfigurationDto: CreateColorConfigurationDto,
  ): Promise<ColorConfiguration> {
    const newEntity = CreateColorConfigurationDto.toEntity(
      createColorConfigurationDto,
    );
    return this.colorConfigurationRepository.save(newEntity);
  }

  async findAll(): Promise<ColorConfiguration[]> {
    return this.colorConfigurationRepository.find();
  }

  findOne(id: number): Promise<ColorConfiguration> {
    return this.colorConfigurationRepository.findOneBy({ id: id });
  }

  update(id: number, updateColorConfigurationDto: UpdateColorConfigurationDto) {
    throw new NotImplementedException();
  }

  remove(id: number) {
    throw new NotImplementedException();
  }
}
