import { HousesService } from './../../../shared/services/houses.service';
import { Component, OnInit } from '@angular/core';
import { House } from '../../../shared/model/house.model';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-house-item',
  templateUrl: './house-item.component.html',
  styleUrls: ['./house-item.component.css']
})
export class HouseItemComponent implements OnInit {
  house: House = new House();
  error: Object;

  constructor(
    private router: Router,
    private routes: ActivatedRoute,
    private housesService: HousesService) { }

  ngOnInit() {
    this.routes
      .data
      .subscribe(data => {
        this.house = data['house'];
      });
  }

  onClickDelete() {
    if (window.confirm('Are you sure?')) {
      this.housesService.delete(this.house.id)
        .subscribe(() => {
          this.router.navigate(['/houses']);
        });
    }
  }

  onSubmitHouse(houseForm: NgForm) {
      
      this.housesService.edit(this.house)
        .subscribe(
          (house) => {
            this.router.navigate(['/houses']);
          }
      );
    }
}
