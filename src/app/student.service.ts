import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  // totalAngularPackages: any;
  // tests : any;
  constructor(private http: HttpClient) {}
  data : any;
  getStudents() {
    return [
      { id: 1, name: 'mayra', age: 2 },
      { id: 2, name: 'nayra', age: 6 },
      { id: 3, name: 'kayra', age: 8 },
      { id: 4, name: 'piya', age: 7 },
      { id: 5, name: 'siya', age: 2 },
    ];
  }
  

  getTest() {
    return this.http.get<SearchResults>('https://restcountries.com/v3.1/name/united')
  }
  // postTest(data:any) {
  //   return this.http.post('http://192.168.1.116:3000/api/users/register',data);
  // }
}
interface SearchResults {
  name: Array<object>;
  tid: string;
  
}