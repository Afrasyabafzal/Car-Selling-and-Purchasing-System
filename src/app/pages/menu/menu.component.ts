import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from 'src/app/services/order-details.service';
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

  constructor(private service:OrderDetailsService) { }
  carData:any;
  carData2:any;
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
}
