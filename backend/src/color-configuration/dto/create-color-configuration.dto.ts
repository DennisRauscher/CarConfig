import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Length, Max, Min } from 'class-validator';
import { ColorConfiguration } from '../entities/color-configuration.entity';

export class CreateColorConfigurationDto {
  @IsNotEmpty()
  @Length(1, 255)
  @ApiProperty()
  colorName: string;

  @Min(1)
  @Max(999999)
  @ApiProperty()
  basePrice: number;

  /**
   * generates a ColorConfiguration entity from a dto CreateColorConfigurationDto source
   * @param dto source CreateColorConfigurationDto
   * @returns generated ColorConfiguration
   */
  public static toEntity(dto: CreateColorConfigurationDto): ColorConfiguration {
    const newEntity = new ColorConfiguration();
    newEntity.colorName = dto.colorName;
    newEntity.basePrice = dto.basePrice;
    return newEntity;
  }
}
