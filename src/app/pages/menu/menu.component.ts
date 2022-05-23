import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from 'src/app/services/order-details.service';
import {ApiService } from '../../services/api.service';
interface Car {
  id: number;
  name: string;
  price: number;
  details: string;
  img: string;
}
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  searchTerm!: string;
  term!: string;

  constructor(private service:OrderDetailsService,
    private apiService: ApiService) {
      this.readCar();
     }
  carData:any;
  carData2:any;
  carDetails: any=[];
  category:any;
  Cities :any;
  prices : any;
  ngOnInit(): void {
    this.carData2 =  this.service.carDetails;
    this.carData = this.service.carDetails;
    this.category = this.service.category;
    this.Cities = this.service.city;
    this.prices = this.service.price;
  }
  readCar(){
    this.apiService.getCars().subscribe(data => {
      console.log(data);
      //coverting the data into array
      this.carDetails = data;
      console.log(this.carDetails.data[0].name);
    });

  }
  public selectedBrand: any;
  public valueSelected() {
    this.carData = this.service.carDetails.filter(
      item => item.name === this.selectedBrand
    );
  }
  public valueSelectedCat() {
    this.carData = this.service.carDetails.filter(
      item => item.category === this.selectedBrand
    );
  }
  public valueSelectedCity() {
    this.carData = this.service.carDetails.filter(
      item => item.location === this.selectedBrand
    );
  }
  public valueSelectedPrice() {
    this.carData = this.service.carDetails.filter(
      item => (item.price <= this.selectedBrand)
    );
  }
  public removeCar(car: any, index: any) {
    console.log(car);
    if(window.confirm('Are you sure you want to delete this car?')) {
      this.apiService.deleteCar(car._id).subscribe(data => {
        this.carDetails.splice(index, 1);
      });
    }
  }
}
