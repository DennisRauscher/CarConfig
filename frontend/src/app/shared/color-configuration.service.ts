import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomHttpService } from './custom-http.service';

@Injectable({
  providedIn: 'root'
})
export class ColorConfigurationService {
  constructor(private customHttpService: CustomHttpService) { }

  getAll(): Observable<IColorConfiguration[] | null> {
    return this.customHttpService.httpGet<IColorConfiguration[]>('/api/v1/color-configuration', 'getAll_color-configuration');
  }
  
  getById(id: number): Observable<IColorConfiguration | null> {
    return this.customHttpService.httpGet<IColorConfiguration>("/api/v1/color-configuration/" + id, 'getById_color-configuration');
  }
}
