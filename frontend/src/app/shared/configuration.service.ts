import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CustomHttpService } from './custom-http.service';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  constructor(private customHttpService: CustomHttpService) { }

  getAll(): Observable<IConfiguration[] | null> {
    return this.customHttpService.httpGet<IConfiguration[]>('/api/v1/configuration', 'getAll_configuration');
  }
  
  getById(id: number): Observable<IConfiguration | null> {
    return this.customHttpService.httpGet<IConfiguration>('/api/v1/configuration', 'getById_configuration');
  }

  deleteConfiguration(id: number): Observable<void | null> {
    return this.customHttpService.httpDelete<void>("/api/v1/configuration/" + id, 'deleteConfiguration_configuration');
  }

  createNewConfiguration(data: IConfigurationCreateDto): Observable<IConfiguration | null> {
    return this.customHttpService.httpPost<IConfiguration>("/api/v1/configuration", data, 'createNewConfiguration_configuration');
  } 

  updateConfiguration(data: IConfigurationUpdateDto): Observable<void | null> {
    return this.customHttpService.httpPatch<void>("/api/v1/configuration/" + data.id, data, 'updateConfiguration_configuration');
  } 
  
}
