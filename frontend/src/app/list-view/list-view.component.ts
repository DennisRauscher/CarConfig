import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { ConfirmationModalComponent } from '../confirmation-modal/confirmation-modal.component';
import { EditConfigurationModalComponent } from '../edit-configuration-modal/edit-configuration-modal.component';
import { ConfigurationService } from '../shared/configuration.service';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent implements OnInit {
  public loading = true;
  public configurations: IConfiguration[] = [];

  constructor(public readonly dialog: MatDialog, private readonly configurationService: ConfigurationService) {}

  async ngOnInit(): Promise<void>{
    this.reloadConfigurations();
  }

  /**
   * reloads the configurations from the backend
   */
  private reloadConfigurations() {
    this.loading = true;
    this.configurationService.getAll().subscribe((res) => {
      this.loading = false;
      if(res) {
        this.configurations = res;
      }
    });
  }

  /**
   * open create new configuration modal
   * @param configuration existing configuration or null to create a new one
   */
  public openCreateConfigModal(configuration: IConfiguration | null): void {
    let dto = null;
    if(configuration !== null) {
      dto = {
        id: configuration.id,
        name: configuration.name,
        carId: configuration.car.id,
        colorConfigurationId: configuration.colorConfiguration.id,
        performanceConfigurationId: configuration.performanceConfiguration.id,
        additionalConfigurationsIds: configuration.additionalConfigurations.map(({ id }) => id) 
      } as IConfigurationUpdateDto;
    }

    const dialogRef = this.dialog.open(EditConfigurationModalComponent, {
      data: dto
    });

    dialogRef.componentInstance.triggerReload.subscribe(() => {
      this.reloadConfigurations();
    });
  }
  
  /**
   * deletes a configuration
   * @param configuration configuration to delete
   */
  public deleteConfig(configuration: IConfiguration): void {
    const dialogRef = this.dialog.open(ConfirmationModalComponent, {
      width: '250px',
      data: {
        message: "Möchtest du diese Konfiguration wirklich löschen?",
        title: "Konfiguration löschen"
      } as IConfirmationData
    });

    dialogRef.componentInstance.confirm.subscribe((data: any) => {
      this.loading = true;
      this.configurationService.deleteConfiguration(configuration.id!).subscribe(() => {
        this.reloadConfigurations();
        this.loading = false;
      });
    });
  }
}
