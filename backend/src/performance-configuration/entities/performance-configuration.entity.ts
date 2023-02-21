import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Configuration } from '../../configuration/entities/configuration.entity';

@Entity()
export class PerformanceConfiguration {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 255,
    nullable: false,
  })
  configName: string;

  @Column({
    type: 'int',
    nullable: false,
    default: 0,
  })
  power: number;

  @Column({
    type: 'int',
    nullable: false,
    default: 0,
  })
  basePrice: number;

  @OneToMany(
    () => Configuration,
    (configuration) => configuration.performanceConfiguration,
  )
  configurations: Configuration[];
}
