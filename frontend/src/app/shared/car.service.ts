import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { CustomHttpService } from './custom-http.service';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  constructor(private customHttpService: CustomHttpService) { }

  getAll(): Observable<ICar[] | null> {
    return this.customHttpService.httpGet<ICar[]>('/api/v1/car', 'getAll_car');
  }
  
  getById(id: number): Observable<ICar | null> {
    return this.customHttpService.httpGet<ICar>("/api/v1/car/" + id, 'getById_car');
  }
}
