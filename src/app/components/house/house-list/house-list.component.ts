import { SessionService } from './../../../shared/services/session.service';
import { HousesService } from './../../../shared/services/houses.service';
import { House } from './../../../shared/model/house.model';
import { Component, OnInit } from '@angular/core';
import { User } from '../../../shared/model/user.model';

@Component({
  selector: 'app-house-list',
  templateUrl: './house-list.component.html',
  styleUrls: ['./house-list.component.css']
})
export class HouseListComponent implements OnInit {
  houses: Array<House> = [];

  constructor(private housesService: HousesService) { }

  ngOnInit() {
    this.housesService.list()
      .subscribe((houses) => this.houses = houses);
  }

}
