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
import { PerformanceConfigurationService } from './performance-configuration.service';
import { CreatePerformanceConfigurationDto } from './dto/create-performance-configuration.dto';
import { UpdatePerformanceConfigurationDto } from './dto/update-performance-configuration.dto';
import { ApiExcludeEndpoint } from '@nestjs/swagger';

@Controller('performance-configuration')
export class PerformanceConfigurationController {
  constructor(
    private readonly performanceConfigurationService: PerformanceConfigurationService,
  ) {}

  @ApiExcludeEndpoint()
  @Post()
  create(
    @Body()
    createPerformanceConfigurationDto: CreatePerformanceConfigurationDto,
  ) {
    throw new NotImplementedException();
  }

  @Get()
  findAll() {
    return this.performanceConfigurationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.performanceConfigurationService.findOne(+id);
  }

  @ApiExcludeEndpoint()
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body()
    updatePerformanceConfigurationDto: UpdatePerformanceConfigurationDto,
  ) {
    throw new NotImplementedException();
  }

  @ApiExcludeEndpoint()
  @Delete(':id')
  remove(@Param('id') id: string) {
    throw new NotImplementedException();
  }
}
