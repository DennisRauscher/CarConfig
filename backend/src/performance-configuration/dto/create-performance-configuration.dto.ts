import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Length, Max, Min } from 'class-validator';

export class CreatePerformanceConfigurationDto {
  @IsNotEmpty()
  @Length(1, 255)
  @ApiProperty()
  configName: string;

  @Min(1)
  @Max(999999)
  @ApiProperty()
  power: number;

  @Min(1)
  @Max(999999)
  @ApiProperty()
  basePrice: number;
}
