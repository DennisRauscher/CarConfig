import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotImplementedException,
} from '@nestjs/common';
import { ApiExcludeEndpoint } from '@nestjs/swagger';
import { AdditionalConfigurationService } from './additional-configuration.service';
import { CreateAdditionalConfigurationDto } from './dto/create-additional-configuration.dto';
import { UpdateAdditionalConfigurationDto } from './dto/update-additional-configuration.dto';

@Controller('additional-configuration')
export class AdditionalConfigurationController {
  constructor(
    private readonly additionalConfigurationService: AdditionalConfigurationService,
  ) {}

  @Post()
  create(
    @Body() createAdditionalConfigurationDto: CreateAdditionalConfigurationDto,
  ) {
    return this.additionalConfigurationService.create(
      createAdditionalConfigurationDto,
    );
  }

  @Get()
  findAll() {
    return this.additionalConfigurationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.additionalConfigurationService.findOne(+id);
  }

  @ApiExcludeEndpoint()
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAdditionalConfigurationDto: UpdateAdditionalConfigurationDto,
  ) {
    throw new NotImplementedException();
  }

  @ApiExcludeEndpoint()
  @Delete(':id')
  remove(@Param('id') id: string) {
    throw new NotImplementedException();
  }
}
