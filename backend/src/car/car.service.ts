import { Injectable, NotImplementedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Car } from './entities/car.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CarService {
  constructor(
    @InjectRepository(Car)
    private carRepository: Repository<Car>,
  ) {}

  /**
   * finds all Car-Entities and returns them
   * @returns promise of array of all Cars
   */
  async findAll(): Promise<Car[]> {
    return this.carRepository.find();
  }

  /**
   * finds one Car by id
   * @param id id of Car entity
   * @returns promise of found Car
   */
  findOne(id: number): Promise<Car | null> {
    return this.carRepository.findOneBy({ id: id });
  }
}
