import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class TestService {

  private url = 'http://127.0.0.1:8000/api/getnewstudentm1';
  url2: string = 'https://localhost:44342/api/test2';
  addTest1: any;
  addTest2: any;

  constructor( private http: HttpClient, private router: Router) { }
  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  savetest1(addtest1){
   this.addTest1 = {
     "id" : addtest1.id,
     "name" : addtest1.name,
     "surname" : addtest1.surname,
   }
   this.http.post<any>(this.url, this.addTest1) .subscribe((data) => {
     this.router.navigate(['/test']);
     console.log(data);
   });
  }

  savetest2(addtest2){
    this.addTest2 = {
      "id" : addtest2.id,
      "address" : addtest2.address,
    }
    this.http.post<any>(this.url2, this.addTest2) .subscribe((data2) =>{
      this.router.navigate(['/test2']);
      console.log(data2);
    });
  }




  errorHandler(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
