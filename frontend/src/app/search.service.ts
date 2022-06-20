import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Observer, of, Subject } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  query = new Subject<string>();
  queryText: String = "";

  constructor(private http: HttpClient) {
    this.query.subscribe({
      next: (value: string) => this.queryText = value
    })
  }

  getResults(): Observable<Product[]> { 
    return of([
      {
        id: 0,
        name: "fake product result",
        price: 24.99,
        description: "Some fake description that's pretty long and perhaps needs to be truncated.",
        imageSrc: "",
      },
      {
        id: 0,
        name: "fake product result",
        price: 24.99,
        description: "Some fake description that's pretty long and perhaps needs to be truncated.",
        imageSrc: "",
      },
      {
        id: 0,
        name: "fake product result",
        price: 24.99,
        description: "Some fake description that's pretty long and perhaps needs to be truncated.",
        imageSrc: "",
      },
      {
        id: 0,
        name: "fake product result",
        price: 24.99,
        description: "Some fake description that's pretty long and perhaps needs to be truncated.",
        imageSrc: "",
      },
      {
        id: 0,
        name: "fake product result",
        price: 24.99,
        description: "Some fake description that's pretty long and perhaps needs to be truncated.",
        imageSrc: "",
      }
    ])
  }
}
