import { ApiProperty } from '@nestjs/swagger';

export class CreatePerformanceConfigurationDto {
  @ApiProperty()
  configName: string;

  @ApiProperty()
  power: number;

  @ApiProperty()
  basePrice: number;
}
