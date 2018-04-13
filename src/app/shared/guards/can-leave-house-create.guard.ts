import { HouseCreateComponent } from './../../components/house/house-create/house-create.component';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class CanLeaveHouseCreateGuard implements CanDeactivate<HouseCreateComponent> {

  canDeactivate(component: HouseCreateComponent): Observable<boolean> | Promise<boolean> | boolean {
    return component.canLeaveTheComponent();
  }
}
