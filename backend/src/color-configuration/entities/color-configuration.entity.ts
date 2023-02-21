import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Configuration } from '../../configuration/entities/configuration.entity';

@Entity()
export class ColorConfiguration {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 255,
    nullable: false,
  })
  colorName: string;

  @Column({
    type: 'int',
    nullable: false,
    default: 0,
  })
  basePrice: number;

  @OneToMany(
    () => Configuration,
    (configuration) => configuration.colorConfiguration,
  )
  configurations: Configuration[];
}
