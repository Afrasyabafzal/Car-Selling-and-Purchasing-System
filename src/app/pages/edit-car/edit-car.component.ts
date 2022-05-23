import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { Car } from 'src/app/models/car'

@Component({
  selector: 'app-edit-car',
  templateUrl: './edit-car.component.html',
  styleUrls: ['./edit-car.component.css']
})
export class EditCarComponent implements OnInit {

  submitted = false;
  editForm!: FormGroup;
  carData: Car[] = [];
  constructor(public fb: FormBuilder = new FormBuilder,
    private actRoute: ActivatedRoute = new ActivatedRoute,
    private apiService: ApiService,
    private router: Router) {
    
   }

  ngOnInit(): void {
    let id = this.actRoute.snapshot.paramMap.get('id')
    console.log(id)
    this.editForm = this.fb.group({
      id: [0, Validators.required],
      name: ['', Validators.required],
      price: [0, Validators.required],
      category: ['', Validators.required],
      date_added: ['', Validators.required],
      location: ['', Validators.required],
      rating: [0, Validators.required],
      img: ['', Validators.required]
    });
    this.getCar(id)

  }

  getCar(id:any){
    this.apiService.getCarById(id).subscribe((data) => {
      console.log(data.data['id'])
      this.editForm.setValue({
        id: data.data.id,
        name: data.data.name,
        price: data.data['price'],
        category: data.data['category'],
        date_added: data.data['date_added'],
        location: data.data['location'],
        rating: data.data['rating'],
        img: data.data['img']
      })
    });
  }
get myForm(){
  return this.editForm.controls;
}

onSubmit() {
  this.submitted = true;
  if(!this.editForm.valid){
    return;
  }
  else {
    if(window.confirm('Are you sure?')){
      let id= this.actRoute.snapshot.paramMap.get('id');
      this.apiService.updateCar(id, this.editForm.value).subscribe (  {
        complete: () => {
          this.router.navigateByUrl('/menu');
        },
        error:(e) => {
          console.log(e);
        },
      });
    }
  }
}


}
