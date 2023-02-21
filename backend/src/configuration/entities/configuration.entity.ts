import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  ManyToMany,
} from 'typeorm';
import { Car } from '../../car/entities/car.entity';
import { AdditionalConfiguration } from '../../additional-configuration/entities/additional-configuration.entity';
import { JoinTable } from 'typeorm/decorator/relations/JoinTable';
import { ColorConfiguration } from '../../color-configuration/entities/color-configuration.entity';
import { PerformanceConfiguration } from '../../performance-configuration/entities/performance-configuration.entity';

@Entity()
export class Configuration {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Car, (car) => car.configurations)
  car: Car;

  @ManyToOne(
    () => ColorConfiguration,
    (colorConfiguration) => colorConfiguration.configurations,
  )
  colorConfiguration: ColorConfiguration;

  @ManyToOne(
    () => PerformanceConfiguration,
    (performanceConfiguration) => performanceConfiguration.configurations,
  )
  performanceConfiguration: PerformanceConfiguration;

  @ManyToMany(
    () => AdditionalConfiguration,
    (additionalConfiguration) => additionalConfiguration.configurations,
  )
  @JoinTable({ name: 'configuration_additionalConfiguration' })
  additionalConfigurations: AdditionalConfiguration[];
}
