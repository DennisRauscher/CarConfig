import { ApiProperty } from '@nestjs/swagger';
import { AdditionalConfiguration } from '../entities/additional-configuration.entity';
export class CreateAdditionalConfigurationDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  basePrice: number;

  public static toEntity(
    dto: CreateAdditionalConfigurationDto,
  ): AdditionalConfiguration {
    const newEntity = new AdditionalConfiguration();
    newEntity.name = this.name;
    newEntity.basePrice = dto.basePrice;
    return newEntity;
  }
}
