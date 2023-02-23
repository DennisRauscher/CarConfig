import { PartialType } from '@nestjs/swagger';

import { CreateAdditionalConfigurationDto } from './create-additional-configuration.dto';

export class UpdateAdditionalConfigurationDto extends PartialType(
  CreateAdditionalConfigurationDto,
) {}
