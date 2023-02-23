import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, map, Observable, of, shareReplay, startWith } from 'rxjs';
import { ConfirmationModalComponent } from '../confirmation-modal/confirmation-modal.component';


@Injectable({
  providedIn: 'root'
})
export class CustomHttpService {
  constructor(private http: HttpClient, private dialog: MatDialog) { }
  
  /**
   * applies cache support for http request
   * @param request HttpRequest observable
   * @param localKey local key name (can be any unique string)
   * @returns Observable
   */
  public cacheData<T>(request: Observable<T>, localKey: string): Observable<T> {
      request.subscribe(next => {
          localStorage[localKey] = JSON.stringify(next);
      });
      return request.pipe(startWith(localStorage[localKey] ? JSON.parse(localStorage[localKey]) : []))
  }
 
  /** applies default pipeline for request (shareReply, mapping, error handling) */
  public applyDefaultPipe<T>(request: Observable<HttpResponse<T>>): Observable<T | null> {
    return request.pipe(
      map(data => data.body),
      shareReplay(),
      catchError(err => {
        try {
          this.showErrorModal("Error: " + err.status + " " + err.name, err.message);
        } catch (error) {
          console.log(error);
        }
        throw err;
      }))
  }
  
  /**
   * gets data from a url endpoint via get request, saves response to local cache
   * @param url url to endpoint
   * @param localKey key string for cache
   * @returns value or null
   */
  public httpGet<T>(url: string, localKey: string): Observable<T | null> {
      const request = this.http.get<T>(url, { observe: 'response' })
      return this.applyDefaultPipe(this.cacheData(request, localKey));
  }
  
  /**
   * posts data to an endpoint via post
   * @param url url endpoint
   * @param data data to send
   * @returns response or null
   */
  public httpPost<T>(url: string, data: any): Observable<T | null> {
    const request = this.http.post<T>(url, data, { observe: 'response' })
    return this.applyDefaultPipe(request);
  }

  /**
   * patches values on an enpoint via patch
   * @param url endpoint url
   * @param data data to send to the endpoint
   * @returns response or null
   */
  public httpPatch<T>(url: string, data: any): Observable<T | null> {
    const request = this.http.patch<T>(url, data, { observe: 'response' })
    return this.applyDefaultPipe(request);
  }

  /**
   * deletes data on an endpoint via delete
   * @param url endpoint to send the request to
   * @returns value or null
   */
  public httpDelete<T>(url: string): Observable<T | null> {
    const request = this.http.delete<T>(url, { observe: 'response' })
    return this.applyDefaultPipe(request);
  }

  /**
   * opens modal for error signaling
   * @param errorTitle title for modal
   * @param errorMsg message for modal
   */
  public showErrorModal(errorTitle: string, errorMsg: string): void {
    this.dialog.open(ConfirmationModalComponent, {
      data: {
        message: errorMsg,
        title: errorTitle
      } as IConfirmationData
    });
  }
}