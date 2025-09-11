import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Data } from '../interfaces/data';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiURL = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  getData() {
    return ['Data 1', 'Data 2', 'Data 3'];
  }

  getPosts(): Observable<Data[]> {
    return this.http.get<Data[]>(this.apiURL);
  }
}
