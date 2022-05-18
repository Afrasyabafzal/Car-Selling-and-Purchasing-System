import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})

export class ApiService {
    baseUrl = 'http://localhost:3000/api/';
    headers = new HttpHeaders().set('Content-Type','application/json');
    constructor(private http: HttpClient) { }

    //add car
    addCar(data: any): Observable<any> {
        const url = `${this.baseUrl}/add`;
        return this.http.post(url, data).pipe(catchError(this.errorMgmt));
    }
    //get all cars
    getCars(): Observable<any> {
        return this.http.get(`${this.baseUrl}`).pipe(catchError(this.errorMgmt));
    }
    //get car by id
    getCarById(id: any): Observable<any> {
        return this.http.get(`${this.baseUrl}/${id}`).pipe(catchError(this.errorMgmt));
    }
    //update car
    updateCar(id: any, data: any): Observable<any> {
        const url = `${this.baseUrl}/update/${id}`;
        return this.http.put(url, data, { headers: this.headers }).pipe(catchError(this.errorMgmt));
    }
    //delete car
    deleteCar(id: any): Observable<any> {
        const url = `${this.baseUrl}/delete/${id}`;
        return this.http.delete(url, { headers: this.headers }).pipe(catchError(this.errorMgmt));
    }

    // Error handling
    errorMgmt(error: HttpErrorResponse) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
        // Get client-side error
        errorMessage = error.error.message;
        } else {
        // Get server-side error
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.log(errorMessage);
        return throwError(() => {
        return errorMessage;
        });
    }

}
