interface IConfiguration {
    id: number;
    name: string;
    car: ICar;
    colorConfiguration: IColorConfiguration;
    performanceConfiguration: IPerformanceConfiguration;
    additionalConfigurations: IAdditionalConfiguration[];
}

interface IConfigurationCreateDto {
    name: string;
    carId: number;
    colorConfigurationId: number;
    performanceConfigurationId: number;
    additionalConfigurationsIds: number[];
}

interface IConfigurationUpdateDto extends IConfigurationCreateDto {
    id: number;
}

interface ICar {
    id: number;
    className: string;
    modelName: string;
    basePrice: number;
}

interface IColorConfiguration {
    id: number;
    colorName: string;
    basePrice: number;
}

interface IPerformanceConfiguration {
    id: number;
    configName: string;
    power: number;
    basePrice: number;
}

interface IAdditionalConfiguration {
    id: number;
    name: string;
    basePrice: number;
}

interface IConfirmationData {
  message: string;
}