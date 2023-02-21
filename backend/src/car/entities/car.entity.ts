import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Configuration } from '../../configuration/entities/configuration.entity';

@Entity()
export class Car {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 255,
    nullable: false,
  })
  className: string;

  @Column({
    length: 255,
    nullable: false,
  })
  modelName: string;

  @Column({
    type: 'int',
    nullable: false,
    default: 0,
  })
  basePrice: number;

  @OneToMany(() => Configuration, (configuration) => configuration.car)
  configurations: Configuration[];
}
