import { HousesService } from './../../../shared/services/houses.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { SearchParams } from '../../../shared/model/searchParams.model';

@Component({
  selector: 'app-house-search',
  templateUrl: './house-search.component.html',
  styleUrls: ['./house-search.component.css']
})
export class HouseSearchComponent {
  searchParams: SearchParams = new SearchParams();
  apiError: string;
  houseList: Array<Object> = [];

  constructor(
    private router: Router,
    private housesService: HousesService) {}

  onSubmitHouseSearch() {
      this.housesService.search(this.searchParams)
        .subscribe(
          houseSearchResults => {
            this.houseList = houseSearchResults;
            this.searchParams = new SearchParams(); // duda
          },
          error => {
            this.apiError = error;
          }
      );
    }
  }
