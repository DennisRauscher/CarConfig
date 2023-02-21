import { PartialType } from '@nestjs/swagger';
import { CreateColorConfigurationDto } from './create-color-configuration.dto';

export class UpdateColorConfigurationDto extends PartialType(
  CreateColorConfigurationDto,
) {}
