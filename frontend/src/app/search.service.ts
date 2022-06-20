import { Injectable } from '@angular/core';
import { Observable, Observer, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  query = new Subject<string>()

  constructor() { }
}
