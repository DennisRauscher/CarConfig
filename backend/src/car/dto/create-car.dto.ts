import { ApiProperty } from '@nestjs/swagger';
import { Car } from '../entities/car.entity';
export class CreateCarDto {
  @ApiProperty()
  className: string;

  @ApiProperty()
  modelName: string;

  @ApiProperty()
  basePrice: number;

  public static toEntity(dto: CreateCarDto): Car {
    const newEntity = new Car();
    newEntity.className = dto.className;
    newEntity.modelName = dto.modelName;
    newEntity.basePrice = dto.basePrice;
    return newEntity;
  }
}
