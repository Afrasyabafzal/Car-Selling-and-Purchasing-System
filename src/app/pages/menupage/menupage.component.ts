import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.css']
})
export class MenupageComponent implements OnInit {

  constructor(private param:ActivatedRoute,private service:OrderDetailsService) { }
  getCarId:any;
  carData:any;
  ngOnInit(): void {
    this.getCarId = this.param.snapshot.paramMap.get('id');
    this.carData = this.service.carDetails.filter((data) =>{
      return data.id == this.getCarId;
      }
    );
  }

}
