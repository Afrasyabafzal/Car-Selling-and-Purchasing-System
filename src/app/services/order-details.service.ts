import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  // carDetails
  carDetails = [{
    id: 1,
    name: 'Audi',
    price: '$12.00',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae. Sed dui lorem, adipiscing in adipiscing et, interdum nec metus. Mauris ultricies, justo eu convallis placerat, felis enim.',
    img: '../assets/img/car1.jpg'

  },
  {
    id: 2,
    name: 'BMW',
    price: '$15.00',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae. Sed dui lorem, adipiscing in adipiscing et, interdum nec metus. Mauris ultricies, justo eu convallis placerat, felis enim.',
    img: '../assets/img/car2.jpg'
  },
  {
    id: 3,
    name: 'Mercedes',
    price: '$18.00',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae. Sed dui lorem, adipiscing in adipiscing et, interdum nec metus. Mauris ultricies, justo eu convallis placerat, felis enim.',
    img: '../assets/img/car3.jpg'
  },
  {
    id: 4,
    name: 'Nissan',
    price: '$20.00',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae. Sed dui lorem, adipiscing in adipiscing et, interdum nec metus. Mauris ultricies, justo eu convallis placerat, felis enim.',
    img: '../assets/img/car4.jpg'
  },
  {
    id: 5,
    name: 'Porsche',
    price: '$25.00',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae. Sed dui lorem, adipiscing in adipiscing et, interdum nec metus. Mauris ultricies, justo eu convallis placerat, felis enim.',
    img: '../assets/img/car5.jpg'
  },
  {
    id: 6,
    name: 'Toyota',
    price: '$25.00',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae. Sed dui lorem, adipiscing in adipiscing et, interdum nec metus. Mauris ultricies, justo eu convallis placerat, felis enim.',
    img: '../assets/img/car6.jpg'
  }]
}
