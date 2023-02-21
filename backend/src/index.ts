import { Car } from './car/entities/car.entity';
import { Configuration } from './configuration/entities/configuration.entity';
import { ColorConfiguration } from './color-configuration/entities/color-configuration.entity';
import { AdditionalConfiguration } from './additional-configuration/entities/additional-configuration.entity';
import { PerformanceConfiguration } from './performance-configuration/entities/performance-configuration.entity';
const entities = [
  Configuration,
  Car,
  ColorConfiguration,
  AdditionalConfiguration,
  PerformanceConfiguration,
];

export {
  Configuration,
  Car,
  ColorConfiguration,
  AdditionalConfiguration,
  PerformanceConfiguration,
};
export default entities;
