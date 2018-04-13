import { HousesService } from './../../../shared/services/houses.service';
import { House } from './../../../shared/model/house.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-house-create',
  templateUrl: './house-create.component.html',
  styleUrls: ['./house-create.component.css']
})
export class HouseCreateComponent {
  house: House = new House();
  apiError: string;
  @ViewChild('imageFile') imageFile;
  @ViewChild('houseForm') houseForm;

  constructor(
    private router: Router,
    private housesService: HousesService) {}

  onSubmitHouse(houseForm: NgForm) {
    const imageFile = this.imageFile.nativeElement;
    if (imageFile.files && imageFile.files[0]) {
      this.house.image = imageFile.files[0];
      this.housesService.create(this.house)
        .subscribe(
          (house) => {
            houseForm.reset();
            this.router.navigate(['/houses']);
          },
          (error) => {
            this.apiError = error;
          }
      );
    }
  }

  canLeaveTheComponent(): boolean {
    if (this.houseForm.dirty) {
      return window.confirm(`
        Unsaved changes.
        Are you sure you want to leave?
    `);
    } else {
      return true;
    }
  }
}
