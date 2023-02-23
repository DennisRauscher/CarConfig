import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsPositive, Length } from 'class-validator';

export class CreateConfigurationDto {
  @IsNotEmpty()
  @Length(1, 255)
  @ApiProperty()
  name: string;
  
  @IsPositive()
  @ApiProperty()
  carId: number;

  @IsPositive()
  @ApiProperty()
  colorConfigurationId: number;

  @IsPositive()
  @ApiProperty()
  performanceConfigurationId: number;

  @ApiProperty({ isArray: true, type: Number })
  additionalConfigurationsIds: number[];
}
