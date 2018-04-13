import { HousesService } from './../services/houses.service';
import { Observable } from 'rxjs/Rx';
import { House } from './../model/house.model';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable()
export class HouseDetailsResolverGuard implements Resolve<House> {

  constructor(
    private router: Router,
    private housesService: HousesService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<House> {
    return this.housesService
      .get(route.params['id'])
      .catch(error => {
        this.router.navigate(['/houses']);
        return Observable.of(error);
      });
  }
}
