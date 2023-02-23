import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, Length, Max, Min } from 'class-validator';

import { AdditionalConfiguration } from '../entities/additional-configuration.entity';

export class CreateAdditionalConfigurationDto {
  @IsNotEmpty()
  @Length(1, 255)
  @ApiProperty()
  name: string;

  @IsInt()
  @Min(1)
  @Max(999999)
  @ApiProperty()
  basePrice: number;

  /**
   * generates a AdditionalConfiguration entity from a dto CreateAdditionalConfigurationDto source
   * @param dto source CreateAdditionalConfigurationDto
   * @returns generated AdditionalConfiguration
   */
  public static toEntity(
    dto: CreateAdditionalConfigurationDto,
  ): AdditionalConfiguration {
    const newEntity = new AdditionalConfiguration();
    newEntity.name = this.name;
    newEntity.basePrice = dto.basePrice;
    return newEntity;
  }
}
