import { BaseApiService } from './base-api.service';
// import { BaseApiIdealistaService } from './base-api-idealista.service';
import { House } from '../model/house.model';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class HousesService extends BaseApiService {
  private static readonly HOUSES_API = `${BaseApiService.BASE_API}/houses`;
  // private static readonly HOUSES_API_IDEALISTA = `${BaseApiIdealistaService.BASE_API}/houses`;

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

  // searchIdealista(houseIdealista): Observable<any> { //duda con el observable
  //   return this.http.post(`${HousesService.HOUSES_API}/search`, JSON.stringify(houseIdealista), BaseApiIdealistaService.defaultOptions)
  //     .map((res: Response) => res.json())
  //     .catch(error => this.handleError(error));
  // }

  create(house: House): Observable<House> {
    return this.http.post(HousesService.HOUSES_API, house.asFormData(), BaseApiService.defaultOptions)
      .map((res: Response) => res.json())
      .catch(error => this.handleError(error));
  }

  edit(house: House): Observable<House> {
    return this.http.post(`${HousesService.HOUSES_API}/edit/${house.id}`, JSON.stringify(house), BaseApiService.defaultOptions)
      .map((res: Response) => res.json())
      .catch(error => this.handleError(error));
  }

  editWithPhoto(house: House): Observable<House> {
    return this.http.post(`${HousesService.HOUSES_API}/edit/${house.id}`, house.asFormData(), BaseApiService.defaultOptions)
      .map((res: Response) => res.json())
      .catch(error => this.handleError(error));
  }

  delete(id: string): Observable<void> {
    return this.http.delete(`${HousesService.HOUSES_API}/${id}`, BaseApiService.defaultOptions)
      .map((res: Response) => res.json())
      .catch(error => this.handleError(error));
  }

}
