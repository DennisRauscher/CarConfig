import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay, startWith } from 'rxjs';
import { CustomHttpService } from './custom-http.service';

@Injectable({
  providedIn: 'root'
})
export class PerformanceConfigurationService {

  constructor(private customHttpService: CustomHttpService) { }

  getAll(): Observable<IPerformanceConfiguration[] | null> {
    return this.customHttpService.httpGet<IPerformanceConfiguration[]>("/api/v1/performance-configuration", 'getAll_performance-configuration');
  }
  
  getById(id: number): Observable<IPerformanceConfiguration | null> {
    return this.customHttpService.httpGet<IPerformanceConfiguration>("/api/v1/performance-configuration/" + id, 'getById_performance-configuration');
  }
}
