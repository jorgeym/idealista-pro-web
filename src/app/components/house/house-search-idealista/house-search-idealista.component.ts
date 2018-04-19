import { HousesService } from './../../../shared/services/houses.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HouseIdealista } from '../../../shared/model/houseIdealista.model';

@Component({
  selector: 'app-house-search-idealista',
  templateUrl: './house-search-idealista.component.html',
  styleUrls: ['./house-search-idealista.component.css']
})
export class HouseSearchIdealistaComponent {
  houseIdealista: HouseIdealista = new HouseIdealista();
  apiError: string;
  houseList: Array<Object> = [];

  constructor(
    private router: Router,
    private housesService: HousesService) {}

  // onSubmitHouseSearch() {
  //     this.housesService.searchIdealista(this.houseIdealista)
  //       .subscribe(
  //         houseSearchResults => {
  //           this.houseList = houseSearchResults;
  //           this.houseIdealista = new HouseIdealista(); // duda
  //         },
  //         error => {
  //           this.apiError = error;
  //         }
  //     );
  //   }
  }
