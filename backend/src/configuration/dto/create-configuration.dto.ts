import { ApiProperty } from '@nestjs/swagger';
import { Configuration } from '../entities/configuration.entity';
export class CreateConfigurationDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  carId: number;
  @ApiProperty()
  colorConfigurationId: number;
  @ApiProperty()
  performanceConfigurationId: number;
  @ApiProperty({ isArray: true, type: Number })
  additionalConfigurationsIds: number[];
}
