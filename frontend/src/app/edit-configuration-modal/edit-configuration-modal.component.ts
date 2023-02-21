import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CarService } from '../shared/car.service';
import { AdditionalConfigurationService } from '../shared/additional-configuration.service';
import { PerformanceConfigurationService } from '../shared/performance-configuration.service';
import { ColorConfigurationService } from '../shared/color-configuration.service';
import { ConfigurationService } from '../shared/configuration.service';
import { firstValueFrom, forkJoin, Observable } from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit-configuration-modal',
  templateUrl: './edit-configuration-modal.component.html',
  styleUrls: ['./edit-configuration-modal.component.scss']
})
export class EditConfigurationModalComponent {
  public isEdit = false;
  public isLoading = true;
  public currentConfiguration!: IConfigurationCreateDto;
  public extras = new FormControl('');
  public initialLodingComplete = false;

  public cars: ICar[] = [];
  public performanceConfigurations: IPerformanceConfiguration[] = [];
  public additionalConfigurations: IAdditionalConfiguration[] = [];
  public colorConfigurations: IColorConfiguration[] = [];

  @Output() onTriggerReload = new EventEmitter<any>(true);

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: IConfigurationCreateDto,
    private readonly configurationService: ConfigurationService,
    private readonly carService: CarService,
    private readonly additionalConfigurationService: AdditionalConfigurationService,
    private readonly performanceConfigurationService: PerformanceConfigurationService,
    private readonly colorConfigurationService: ColorConfigurationService,
  ) {
    if(data !== null) {
      this.isEdit = true;
      this.currentConfiguration = data;
      // @ts-ignore
      this.extras.setValue(this.currentConfiguration.additionalConfigurations);
    } else {
      this.currentConfiguration = {} as IConfigurationCreateDto;
    }

    this.loadFieldData();

    this.extras.valueChanges.subscribe(newData => {
      console.log(newData);
      /*
      // @ts-ignore
      const data = this.extras.value as IAdditionalConfiguration[];
      if(data && data.length > 0) {
        this.currentConfiguration.additionalConfigurations = data;
      } else {
        this.currentConfiguration.additionalConfigurations = [];
      }*/
    })
  }

  private async loadFieldData() {
    this.isLoading = true;
    const carsRes = await firstValueFrom(this.carService.getAll());
    const additionalConfigurationsRes = await firstValueFrom(this.additionalConfigurationService.getAll());
    const performanceConfigurationsRes = await firstValueFrom(this.performanceConfigurationService.getAll());
    const colorConfigurationsRes = await firstValueFrom(this.colorConfigurationService.getAll());

    if(carsRes && additionalConfigurationsRes && performanceConfigurationsRes && colorConfigurationsRes) {
      this.cars = carsRes;
      this.additionalConfigurations = additionalConfigurationsRes;
      this.performanceConfigurations = performanceConfigurationsRes;
      this.colorConfigurations = colorConfigurationsRes;
      this.isLoading = false;
      this.initialLodingComplete = true;
    } else {
      //handle error
    }
  }

  public getFirstItemName(): string {
    /*
    // @ts-ignore
    const data = this.extras.value as IAdditionalConfiguration[];
    if(data && data.length > 0) {
      return data[0].name;
    } else {
      return ""
    }*/
    return "";
  }

  public save() {
    console.log(this.currentConfiguration)
    this.isLoading = true;
    if(this.isEdit) {
      //update existing
    } else {
      //create new
    }
  }
}
