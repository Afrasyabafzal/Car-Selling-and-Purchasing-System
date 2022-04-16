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
  ngOnInit(): void {
    this.carData = this.service.carDetails;
  }

}
