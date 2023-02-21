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
import { CarService } from './car.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { ApiExcludeEndpoint } from '@nestjs/swagger';

@Controller('car')
export class CarController {
  constructor(private readonly carService: CarService) {}

  @ApiExcludeEndpoint()
  @Post()
  create(@Body() createCarDto: CreateCarDto) {
    throw new NotImplementedException();
  }

  @Get()
  findAll() {
    return this.carService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.carService.findOne(+id);
  }

  @ApiExcludeEndpoint()
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCarDto: UpdateCarDto) {
    throw new NotImplementedException();
  }

  @ApiExcludeEndpoint()
  @Delete(':id')
  remove(@Param('id') id: string) {
    throw new NotImplementedException();
  }
}
