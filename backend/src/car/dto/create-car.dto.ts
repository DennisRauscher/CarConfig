import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Length, Max, Min } from 'class-validator';

import { Car } from '../entities/car.entity';

export class CreateCarDto {
  @IsNotEmpty()
  @Length(1, 255)
  @ApiProperty()
  className: string;

  @IsNotEmpty()
  @Length(1, 255)
  @ApiProperty()
  modelName: string;

  @Min(1)
  @Max(999999)
  @ApiProperty()
  basePrice: number;

  /**
   * generates a Car entity from a dto CreateCarDto source
   * @param dto source CreateCarDto
   * @returns generated Car
   */
  public static toEntity(dto: CreateCarDto): Car {
    const newEntity = new Car();
    newEntity.className = dto.className;
    newEntity.modelName = dto.modelName;
    newEntity.basePrice = dto.basePrice;
    return newEntity;
  }
}
