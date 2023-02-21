import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ListViewComponent } from './list-view/list-view.component';
import { EditConfigurationModalComponent } from './edit-configuration-modal/edit-configuration-modal.component';
import { PerformanceConfigurationService } from './shared/performance-configuration.service';
import { ColorConfigurationService } from './shared/color-configuration.service';
import { CarService } from './shared/car.service';
import { ConfigurationService } from './shared/configuration.service';
import { AdditionalConfigurationService } from './shared/additional-configuration.service';
import { HttpClientModule } from '@angular/common/http';
import { ConfirmationModalComponent } from './confirmation-modal/confirmation-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    ListViewComponent,
    EditConfigurationModalComponent,
    ConfirmationModalComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    ConfigurationService,
    CarService,
    ColorConfigurationService,
    PerformanceConfigurationService,
    AdditionalConfigurationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
