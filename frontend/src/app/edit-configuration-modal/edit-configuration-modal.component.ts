import {Component, EventEmitter, Inject, Output} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { firstValueFrom, forkJoin } from 'rxjs';

import {AdditionalConfigurationService} from '../shared/additional-configuration.service';
import {CarService} from '../shared/car.service';
import {ColorConfigurationService} from '../shared/color-configuration.service';
import {ConfigurationService} from '../shared/configuration.service';
import {PerformanceConfigurationService} from '../shared/performance-configuration.service';

@Component({selector: 'app-edit-configuration-modal', templateUrl: './edit-configuration-modal.component.html', styleUrls: ['./edit-configuration-modal.component.scss']})
export class EditConfigurationModalComponent {
    public isEdit = false;
    public isLoading = true;
    public currentConfiguration !: IConfigurationCreateDto | IConfigurationUpdateDto;
    public extras = new FormControl('');
    public initialLodingComplete = false;
    public totalPrice = 0;

    public cars : ICar[] = [];
    public performanceConfigurations : IPerformanceConfiguration[] = [];
    public additionalConfigurations : IAdditionalConfiguration[] = [];
    public colorConfigurations : IColorConfiguration[] = [];

    @Output()triggerReload = new EventEmitter < any > (true);

    constructor(@Inject(MAT_DIALOG_DATA)public data : IConfigurationCreateDto, private readonly configurationService : ConfigurationService, private readonly carService : CarService, private readonly additionalConfigurationService : AdditionalConfigurationService, private readonly performanceConfigurationService : PerformanceConfigurationService, private readonly colorConfigurationService : ColorConfigurationService,) {
        this.initDataForDTO(data);
        this.loadFieldData();
    }

    private initDataForDTO(data : IConfigurationCreateDto | IConfigurationUpdateDto) {
        if (data !== null) {
            this.isEdit = true;
            this.currentConfiguration = data;
        } else {
            this.currentConfiguration = {} as IConfigurationCreateDto;
            this.currentConfiguration.additionalConfigurationsIds = [];
        }
    }

    private async loadFieldData() {
        this.carService
            .getAll()
            .subscribe(res => {
                if (res) {
                    this.cars = res
                }
            });
        this.additionalConfigurationService
            .getAll()
            .subscribe(res => {
                if (res) {
                    this.additionalConfigurations = res
                }
            });
        this.performanceConfigurationService
            .getAll()
            .subscribe(res => {
                if (res) {
                    this.performanceConfigurations = res
                }
            });
        this.colorConfigurationService
            .getAll()
            .subscribe(res => {
                if (res) {
                    this.colorConfigurations = res
                }
                this.isLoading = false; //fix later
                this.initialLodingComplete = true;
            });
    }

    public getFirstItemName() : string {
        if(this.currentConfiguration.additionalConfigurationsIds.length > 0) {
            const firstExtra = this
                .additionalConfigurations
                .find((acs) => acs.id === this.currentConfiguration.additionalConfigurationsIds[0]);
            return firstExtra
                ?.name || "";
        } else {
            return "";
        }
    }

    public calculateTotal() : void {
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
        console.log(this.currentConfiguration)
        this.isLoading = true;
        if (this.isEdit) {
            this
                .configurationService
                .updateConfiguration(this.currentConfiguration as IConfigurationUpdateDto)
                .subscribe(() => {
                    this
                        .triggerReload
                        .emit();
                    this.initDataForDTO(this.currentConfiguration);
                    this.isLoading = false;
                });
        } else {
            this
                .configurationService
                .createNewConfiguration(this.currentConfiguration)
                .subscribe((res) => {
                    if (res) {
                        this
                            .triggerReload
                            .emit();
                        const dto = this.currentConfiguration as IConfigurationUpdateDto;
                        dto.id = res.id;
                        this.initDataForDTO(this.currentConfiguration);
                        this.isLoading = false;
                    }
                });
        }
    }
}
