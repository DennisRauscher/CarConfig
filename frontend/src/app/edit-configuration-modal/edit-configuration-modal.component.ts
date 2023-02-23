import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { AdditionalConfigurationService } from '../shared/additional-configuration.service';
import { CarService } from '../shared/car.service';
import { ColorConfigurationService } from '../shared/color-configuration.service';
import { ConfigurationService } from '../shared/configuration.service';
import { PerformanceConfigurationService } from '../shared/performance-configuration.service';
import { forkJoin } from 'rxjs';

@Component({ selector: 'app-edit-configuration-modal', templateUrl: './edit-configuration-modal.component.html', styleUrls: ['./edit-configuration-modal.component.scss'] })
export class EditConfigurationModalComponent {
    public isEdit = false;
    public isLoading = true;
    public currentConfiguration !: IConfigurationCreateDto | IConfigurationUpdateDto;
    public extras = new FormControl('');
    public initialLodingComplete = false;
    public totalPrice = 0;

    public cars: ICar[] = [];
    public performanceConfigurations: IPerformanceConfiguration[] = [];
    public additionalConfigurations: IAdditionalConfiguration[] = [];
    public colorConfigurations: IColorConfiguration[] = [];

    @Output() triggerReload = new EventEmitter<any>(true);

    constructor(@Inject(MAT_DIALOG_DATA) public data: IConfigurationCreateDto, private readonly configurationService: ConfigurationService, private readonly carService: CarService, private readonly additionalConfigurationService: AdditionalConfigurationService, private readonly performanceConfigurationService: PerformanceConfigurationService, private readonly colorConfigurationService: ColorConfigurationService,) {
        this.initDataForDTO(data);
        this.loadFieldData();
    }

    /**
     * initiates the component with the given dto
     * @param data updated data
     */
    private initDataForDTO(data: IConfigurationCreateDto | IConfigurationUpdateDto) {
        if (data !== null) {
            this.isEdit = true;
            this.currentConfiguration = data;
        } else {
            this.currentConfiguration = {} as IConfigurationCreateDto;
            this.currentConfiguration.additionalConfigurationsIds = [];
        }
    }

    /**
     * loads all required data to calculate and choose a configuration
     */
    private async loadFieldData() {
        const carsObjs = this.carService.getAll()
        carsObjs.subscribe(res => {
            if (res) {
                this.cars = res
            }
        });

        const extrasObs = this.additionalConfigurationService.getAll();
        extrasObs.subscribe(res => {
            if (res) {
                this.additionalConfigurations = res
            }
        });

        const performanceObs = this.performanceConfigurationService
            .getAll();
        performanceObs.subscribe(res => {
            if (res) {
                this.performanceConfigurations = res
            }
        });

        const colorObs = this.colorConfigurationService.getAll();

        colorObs.subscribe(res => {
            if (res) {
                this.colorConfigurations = res
            }
        });

        //wait for completion of cache and real value fetch
        forkJoin([
            carsObjs,
            colorObs,
            extrasObs,
            performanceObs
        ]).subscribe({
            next: () => {
                //use cache
                this.isLoading = false;
                this.initialLodingComplete = true;
                this.calculateTotal();
            },
            complete: () => {
                //use new values
                this.calculateTotal();
            },
        });
    }

    public getFirstItemName(): string {
        if (this.currentConfiguration.additionalConfigurationsIds.length > 0) {
            const firstExtra = this
                .additionalConfigurations
                .find((acs) => acs.id === this.currentConfiguration.additionalConfigurationsIds[0]);
            return firstExtra
                ?.name || "";
        } else {
            return "";
        }
    }

    public calculateTotal(): void {
        let newTotal = 0;

        // add car price
        if (this.currentConfiguration.carId) {
            const car = this
                .cars
                .find(car => car.id === this.currentConfiguration.carId);
            if (car) {
                newTotal += car.basePrice;
            }
        }

        // add color price
        if (this.currentConfiguration.colorConfigurationId) {
            const colorConfig = this
                .colorConfigurations
                .find(cc => cc.id === this.currentConfiguration.colorConfigurationId);
            if (colorConfig) {
                newTotal += colorConfig.basePrice;
            }
        }

        // add performance price
        if (this.currentConfiguration.performanceConfigurationId) {
            const perfConfig = this
                .performanceConfigurations
                .find(pc => pc.id === this.currentConfiguration.performanceConfigurationId);
            if (perfConfig) {
                newTotal += perfConfig.basePrice;
            }
        }

        // add extras price
        const extras = this
            .additionalConfigurations
            .filter(acs => this.currentConfiguration.additionalConfigurationsIds.includes(acs.id));
        for (const extra of extras) {
            newTotal += extra.basePrice;
        }

        this.totalPrice = newTotal;
    }

    public save() {
        this.isLoading = true;
        if (this.isEdit) {
            this
                .configurationService
                .updateConfiguration(this.currentConfiguration as IConfigurationUpdateDto)
                .subscribe({
                    next: () => {
                        this
                            .triggerReload
                            .emit();
                        this.initDataForDTO(this.currentConfiguration);
                        this.isLoading = false;
                    },
                    error: () => {
                        this.isLoading = false;
                    },
                });
        } else {
            this
                .configurationService
                .createNewConfiguration(this.currentConfiguration)
                .subscribe(
                    {
                        next: (res) => {
                            if (res) {
                                this.triggerReload.emit();
                                const dto = this.currentConfiguration as IConfigurationUpdateDto;
                                dto.id = res.id;
                                this.initDataForDTO(this.currentConfiguration);
                            }
                            this.isLoading = false;
                        },
                        error: () => {
                            this.isLoading = false;
                        },
                    });
        }
    }
}
