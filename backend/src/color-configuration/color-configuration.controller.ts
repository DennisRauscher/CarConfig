import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ColorConfigurationService } from './color-configuration.service';
import { CreateColorConfigurationDto } from './dto/create-color-configuration.dto';
import { UpdateColorConfigurationDto } from './dto/update-color-configuration.dto';
import { NotImplementedException } from '@nestjs/common';
import { ApiExcludeEndpoint } from '@nestjs/swagger';

@Controller('color-configuration')
export class ColorConfigurationController {
  constructor(
    private readonly colorConfigurationService: ColorConfigurationService,
  ) {}

  @Post()
  create(@Body() createColorConfigurationDto: CreateColorConfigurationDto) {
    return this.colorConfigurationService.create(createColorConfigurationDto);
  }

  @Get()
  findAll() {
    return this.colorConfigurationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.colorConfigurationService.findOne(+id);
  }

  @ApiExcludeEndpoint()
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateColorConfigurationDto: UpdateColorConfigurationDto,
  ) {
    throw new NotImplementedException();
  }

  @ApiExcludeEndpoint()
  @Delete(':id')
  remove(@Param('id') id: string) {
    throw new NotImplementedException();
  }
}
