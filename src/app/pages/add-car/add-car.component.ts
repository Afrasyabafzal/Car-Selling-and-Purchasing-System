import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ApiService } from '../../services/api.service';
import { FormGroup, FormBuilder, Validators,ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

  submitted = false;
  addCarForm!: FormGroup;
  CarPrpfile: any = ['CAR', 'BIKE'];
  imgUrl: string = ''; 
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private apiService: ApiService,
    private ngZone: NgZone
    
  ) { 
    this.mainForm();
  }

  ngOnInit(): void {
  }
  mainForm() {
    this.addCarForm = this.fb.group({
      id: [0, Validators.required],
      name: ['', Validators.required],
      price: [0, Validators.required],
      category: ['', Validators.required],
      date_added: ['', Validators.required],
      location: ['', Validators.required],
      rating: [0, Validators.required],
      img: ['', Validators.required]
    });
  }
  // updateCar(e: any) {
  //   this.addCarForm.get('category').setValue(e, {
  //     onlySelf: true
  //     });
  // }

  // getter for form fields
  get myForm() {
    return this.addCarForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.addCarForm.valid) {
      return;
    } else {
      this.apiService.addCar(this.addCarForm.value).subscribe({
        complete: () => {
          this.ngZone.run(() => {
            this.router.navigateByUrl('/menu');
          });
        },
        error: (err: any) => {
          console.log(err);
        }
      });
    }
  }

}
