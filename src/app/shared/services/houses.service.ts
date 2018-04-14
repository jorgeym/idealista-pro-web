import { BaseApiService } from './base-api.service';
import { House } from '../model/house.model';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class HousesService extends BaseApiService {
  private static readonly HOUSES_API = `${BaseApiService.BASE_API}/houses`;

  constructor(private http: Http) {
    super();
  }

  list(): Observable<Array<House>> {
    return this.http.get(HousesService.HOUSES_API, BaseApiService.defaultOptions)
      .map((res: Response) => res.json())
      .catch(error => this.handleError(error));
  }

  get(id: string): Observable<House> {
    return this.http.get(`${HousesService.HOUSES_API}/${id}`, BaseApiService.defaultOptions)
      .map((res: Response) => res.json())
      .catch(error => this.handleError(error));
  }

  search(searchParams): Observable<any> { //duda con el observable
    return this.http.post(`${HousesService.HOUSES_API}/search`, JSON.stringify(searchParams), BaseApiService.defaultOptions)
      .map((res: Response) => res.json())
      .catch(error => this.handleError(error));
  }

  create(house: House): Observable<House> {
    return this.http.post(HousesService.HOUSES_API, house.asFormData(), new RequestOptions({ withCredentials: true }))
      .map((res: Response) => res.json())
      .catch(error => this.handleError(error));
  }

  edit(house: House): Observable<House> {
    return this.http.put(`HousesService.HOUSES_API/${house.id}`, house.asFormData(), new RequestOptions({ withCredentials: true }))
      .map((res: Response) => res.json())
      .catch(error => this.handleError(error));
  }

  delete(id: string): Observable<void> {
    return this.http.delete(`${HousesService.HOUSES_API}/${id}`, BaseApiService.defaultOptions)
      .map((res: Response) => res.json())
      .catch(error => this.handleError(error));
  }

}
