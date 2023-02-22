import { Injectable } from '@angular/core';
import { Observable, startWith, shareReplay, map, filter } from 'rxjs';
import { HttpResponse, HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CustomHttpService {
  constructor(private http: HttpClient) { }
  
  public cacheData<T>(request: Observable<T>, localKey: string): Observable<T> {
      request.subscribe(next => {
          localStorage[localKey] = JSON.stringify(next);
      });
      return request.pipe(startWith(localStorage[localKey] ? JSON.parse(localStorage[localKey]) : []))
  }
  
  public httpGet<T>(url: string, localKey: string): Observable<T | null> {
      const request = this.http.get<T>(url, { observe: 'response' }).pipe(shareReplay())
      return this.cacheData(request, localKey).pipe(map(data => data.body));
  }
  
  public httpPost<T>(url: string, data: any, localKey: string): Observable<T | null> {
    const request = this.http.post<T>(url, data, { observe: 'response' }).pipe(shareReplay())
    return request.pipe(map(data => data.body));
  }

  public httpPatch<T>(url: string, data: any, localKey: string): Observable<T | null> {
    const request = this.http.patch<T>(url, data, { observe: 'response' }).pipe(shareReplay())
    return request.pipe(map(data => data.body));
  }

  public httpDelete<T>(url: string, localKey: string): Observable<T | null> {
    const request = this.http.delete<T>(url, { observe: 'response' }).pipe(shareReplay())
    return request.pipe(map(data => data.body));
  }

}