import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }
  //price
  price = [
    10000,
    20000,
    30000,
    40000,
    50000,
    60000,];
  //city
  city = [
           "Islamabad",
            "Lahore",
            "Karachi",
            "Peshawar",
            "Quetta",
  ];
  //category
  category = [
    {
      id: 1,
      name: 'CAR'
    },
    {
      id: 2,
      name: 'BIKE'
    },
  ]
  // carDetails
  carDetails = [{
    id: 1,
    name: 'Audi',
    category: this.category[0].name,
    price: 20000,
    date_added: '12/12/2019',
    location: 'Lahore',
    rating: '4',
    img: '../assets/img/car1.jpg'

  },
  {
    id: 7,
    name: 'Harley Davidson',
    category: this.category[1].name,
    price: 30000,
    date_added: '12/12/2019',
    location: 'Lahore',
    rating: '3',
    img: '../assets/img/bike1.jpg'
  },

  {
    id: 2,
    name: 'BMW',
    category: this.category[0].name,
    price: 40000,
    date_added: '12/12/2019',
    location: 'Lahore',
    rating: '5',
    img: '../assets/img/car2.jpg'
  },
  {
    id: 11,
    name: 'Suzuki GSX',
    category: this.category[1].name,
    price: 15000,
    date_added: '12/12/2019',
    location: 'Lahore',
    rating: '4',
    img: '../assets/img/bike5.jpg'
  },
  {
    id: 3,
    name: 'Mercedes',
    category: this.category[0].name,
    price: 16000,
    date_added: '12/12/2019',
    location: 'Lahore',
    rating: '4',
    img: '../assets/img/car3.jpg'
  },
  {
    id: 4,
    name: 'Nissan',
    category: this.category[0].name,
    price: 17000,
    date_added: '12/12/2019',
    location: 'Lahore',
    rating: '4',
    img: '../assets/img/car4.jpg'
  },
  {
    id: 5,
    name: 'Porsche',
    category: this.category[0].name,
    price: 18000,
    date_added: '12/12/2019',
    location: 'Lahore',
    rating: '4',
    img: '../assets/img/car5.jpg'
  },
  {
    id: 6,
    name: 'Toyota',
    category: this.category[0].name,
    price: 19000,
    date_added: '12/12/2019',
    location: 'Lahore',
    rating: '4',
    img: '../assets/img/car6.jpg'
  },
  // BIKE DETAILS
  {
    id: 10,
    name: 'Honda CafeRacer',
    category: this.category[1].name,
    price: 15000,
    date_added: '12/12/2019',
    location: 'Lahore',
    rating: '4',
    img: '../assets/img/bike4.jpg'
  },
  {
    id: 8,
    name: 'Yamaha R5',
    category: this.category[1].name,
    price: 20000,
    date_added: '12/12/2019',
    location: 'Rawalpindi',
    rating: '5',
    img: '../assets/img/bike2.jpg'
  },

  {
    id: 9,
    name: 'KTM  X-90',
    category: this.category[1].name,
    price: 25000,
    date_added: '12/12/2019',
    location: 'Islamabad',
    rating: '4',
    img: '../assets/img/bike3.jpg'
  },
  
  {
    id: 12,
    name: 'Kawasaki Ninja',
    category: this.category[1].name,
    price: 30000,
    date_added: '12/12/2019',
    location: 'Faislabad',
    rating: '4',
    img: '../assets/img/bike6.jpg'
  },
]
}
