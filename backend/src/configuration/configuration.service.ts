import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateConfigurationDto } from './dto/create-configuration.dto';
import { UpdateConfigurationDto } from './dto/update-configuration.dto';
import { Configuration } from './entities/configuration.entity';
import { CarService } from '../car/car.service';
import { PerformanceConfigurationService } from '../performance-configuration/performance-configuration.service';
import { ColorConfigurationService } from '../color-configuration/color-configuration.service';
import { AdditionalConfigurationService } from '../additional-configuration/additional-configuration.service';

@Injectable()
export class ConfigurationService {
  constructor(
    private readonly carService: CarService,
    private readonly performanceConfigurationService: PerformanceConfigurationService,
    private readonly colorConfigurationService: ColorConfigurationService,
    private readonly additionalConfigurationService: AdditionalConfigurationService,
    @InjectRepository(Configuration)
    private configurationRepository: Repository<Configuration>,
  ) {}

  /**
   * creates a Configuration from provided CreateConfigurationDto data
   * @param createConfigurationDto dto containing data
   * @returns created Configuration
   */
  async create(
    createConfigurationDto: CreateConfigurationDto,
  ): Promise<Configuration> {
    const newEntity = await this.dtoToEntity(createConfigurationDto);
    return this.configurationRepository.save(newEntity);
  }

  /**
   * gets all Configurations with relations
   * @returns all Configurations with relations
   */
  async findAll(): Promise<Configuration[]> {
    return this.configurationRepository.find({
      relations: [
        'car',
        'colorConfiguration',
        'performanceConfiguration',
        'additionalConfigurations',
      ],
    });
  }

  /**
   * 
   * @param id returns a Configuration by id including relations
   * @returns Configuration with relations
   */
  findOne(id: number): Promise<Configuration | null> {
    return this.configurationRepository.findOne({
      where: { id: id },
      relations: [
        'car',
        'colorConfiguration',
        'performanceConfiguration',
        'additionalConfigurations',
      ],
    });
  }

  /**
   * updates a existing Configuration with data from a updateConfigurationDto
   * @param id entity to update
   * @param updateConfigurationDto dto containing the new data
   * @returns updated Configuration
   */
  async update(
    id: number,
    updateConfigurationDto: UpdateConfigurationDto,
  ): Promise<Configuration> {
    const existing = await this.configurationRepository.findOne({
      where: { id: id },
    });

    if (!existing) {
      throw new NotFoundException('Configuration not found.');
    }
    const {
      name,
      additionalConfigurations,
      car,
      performanceConfiguration,
      colorConfiguration,
    } = await this.dtoToEntity(updateConfigurationDto);

    //update fields
    existing.name = name;
    existing.car = car;
    existing.performanceConfiguration = performanceConfiguration;
    existing.colorConfiguration = colorConfiguration;
    existing.additionalConfigurations = additionalConfigurations;
    return this.configurationRepository.save(existing);
  }

  /**
   * removes a Configuration
   * @param id entity to delete
   */
  async remove(id: number): Promise<void> {
    const existing = await this.configurationRepository.findOne({
      where: { id: id },
    });

    if (!existing) {
      throw new NotFoundException('Configuration not found.');
    }

    await this.configurationRepository.remove(existing);
  }

  /**
   * Generates a entity from a dto, also validates all used entity relations
   * @param createConfigurationDto
   * @returns Configuration
   */
  private async dtoToEntity(
    createConfigurationDto: CreateConfigurationDto,
  ): Promise<Configuration> {
    // confirm existence of every id
    const car = await this.carService.findOne(createConfigurationDto.carId);
    if (!car) {
      throw new NotFoundException('Car not found.');
    }

    const colorConfiguration = await this.colorConfigurationService.findOne(
      createConfigurationDto.colorConfigurationId,
    );
    if (!colorConfiguration) {
      throw new NotFoundException('ColorConfiguration not found.');
    }

    const performanceConfiguration =
      await this.performanceConfigurationService.findOne(
        createConfigurationDto.performanceConfigurationId,
      );
    if (!performanceConfiguration) {
      throw new NotFoundException('PerformanceConfiguration not found.');
    }

    // get all additional configurations and make sure they exist
    const allAdditionalConfigurations =
      await this.additionalConfigurationService.findAll();

    const usedAdditionalConfigurations = [];

    for (const additionalConfId of createConfigurationDto.additionalConfigurationsIds) {
      const res = allAdditionalConfigurations.find(
        (additionalConf) => additionalConf.id === additionalConfId,
      );
      if (!res) {
        throw new NotFoundException('Additional configuration not found.');
      }
      usedAdditionalConfigurations.push(res);
    }

    // create new configuration
    const newEntity = new Configuration();
    newEntity.name = createConfigurationDto.name;
    newEntity.car = car;
    newEntity.colorConfiguration = colorConfiguration;
    newEntity.performanceConfiguration = performanceConfiguration;
    newEntity.additionalConfigurations = usedAdditionalConfigurations;
    return newEntity;
  }
}
