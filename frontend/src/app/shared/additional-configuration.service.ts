import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { CustomHttpService } from './custom-http.service';

@Injectable({
  providedIn: 'root'
})
export class AdditionalConfigurationService {
  constructor(private customHttpService: CustomHttpService) { }

  getAll(): Observable<IAdditionalConfiguration[] | null> {
    return this.customHttpService.httpGet<IAdditionalConfiguration[]>('/api/v1/additional-configuration', 'getAll_additional-configuration');
  }
  
  getById(id: number): Observable<IAdditionalConfiguration | null> {
    return this.customHttpService.httpGet<IAdditionalConfiguration>('/api/v1/additional-configuration/' + id, 'getById_additional-configuration');
  }
}
