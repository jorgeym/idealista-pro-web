import { Observable } from 'rxjs/Rx';
import { environment } from './../../../environments/environment';
import { RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class BaseApiIdealistaService {
  protected static readonly BASE_API = environment.baseApi;
  protected static defaultHeaders: Headers = new Headers({ 'Content-Type': 'application/json' });
  protected static defaultOptions: RequestOptions = new RequestOptions({ headers: BaseApiIdealistaService.defaultHeaders, withCredentials: true });

  constructor() {}

  protected handleError(error: Response | any): Observable<any> {
    if (!environment.production) {
      console.error(`${this.constructor.name} error: ${error}`);
    }
    const errorData = error.json();
    errorData.status = error.status;
    return Observable.throw(errorData);
  }

}
