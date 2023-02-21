import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { TypeOrmModule } from '@nestjs/typeorm';
import entities from 'src';
import { CarController } from './car/car.controller';
import { PerformanceConfigurationController } from './performance-configuration/performance-configuration.controller';
import { ColorConfigurationController } from './color-configuration/color-configuration.controller';
import { ConfigurationController } from './configuration/configuration.controller';
import { AdditionalConfigurationController } from './additional-configuration/additional-configuration.controller';
import { CarService } from './car/car.service';
import { ConfigurationService } from './configuration/configuration.service';
import { PerformanceConfigurationService } from './performance-configuration/performance-configuration.service';
import { AdditionalConfigurationService } from './additional-configuration/additional-configuration.service';
import { ColorConfigurationService } from './color-configuration/color-configuration.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '..', 'frontend', 'dist', 'frontend'),
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('POSTGRES_HOST'),
        port: +configService.get<number>('POSTGRES_PORT'),
        username: configService.get('POSTGRES_USER'),
        password: configService.get('POSTGRES_PW'),
        database: configService.get('POSTGRES_DATABASE'),
        entities: entities,
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    TypeOrmModule.forFeature(entities),
  ],
  controllers: [
    AppController,
    CarController,
    PerformanceConfigurationController,
    ColorConfigurationController,
    ConfigurationController,
    AdditionalConfigurationController,
  ],
  providers: [
    AppService,
    CarService,
    ConfigurationService,
    PerformanceConfigurationService,
    AdditionalConfigurationService,
    ColorConfigurationService,
  ],
})
export class AppModule {}
