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
import { NotFoundException } from '@nestjs/common';
import { Car } from './entities/car.entity';

@Controller('car')
export class CarController {
  constructor(private readonly carService: CarService) {}


  /**
   * finds all Cars
   * @returns promise of all found entities
   */
  @Get()
  findAll(): Promise<Car[]> {
    return this.carService.findAll();
  }

  /**
   * tries to find a Car by id
   * @param id Car id
   * @returns promise of found Car or null
   */
  @Get(':id')
  findOne(@Param('id') id: string): Promise<Car> {
    const foundEntity = this.carService.findOne(+id);
    
    if(!foundEntity) {
      throw new NotFoundException("Entity not found.");
    }
    return foundEntity;
  }
}
