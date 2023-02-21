import { PartialType } from '@nestjs/swagger';
import { CreatePerformanceConfigurationDto } from './create-performance-configuration.dto';

export class UpdatePerformanceConfigurationDto extends PartialType(
  CreatePerformanceConfigurationDto,
) {}
