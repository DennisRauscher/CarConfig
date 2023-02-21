import { ApiProperty } from '@nestjs/swagger';
import { ColorConfiguration } from '../entities/color-configuration.entity';

export class CreateColorConfigurationDto {
  @ApiProperty()
  colorName: string;

  @ApiProperty()
  basePrice: number;

  public static toEntity(dto: CreateColorConfigurationDto): ColorConfiguration {
    const newEntity = new ColorConfiguration();
    newEntity.colorName = dto.colorName;
    newEntity.basePrice = dto.basePrice;
    return newEntity;
  }
}
