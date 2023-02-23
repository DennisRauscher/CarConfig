import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ManyToMany } from 'typeorm/decorator/relations/ManyToMany';

import { Configuration } from '../../configuration/entities/configuration.entity';

@Entity()
export class AdditionalConfiguration {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 255,
    nullable: false,
  })
  name: string;

  @Column({
    type: 'int',
    nullable: false,
    default: 0,
  })
  basePrice: number;

  @ManyToMany(
    () => Configuration,
    (configuration) => configuration.additionalConfigurations,
  )
  configurations: Configuration[];
}
