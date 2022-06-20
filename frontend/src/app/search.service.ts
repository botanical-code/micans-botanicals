import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private _query: string = ""

  constructor() { }

  public set query(newQuery: string) {
    this._query = newQuery;
  }

  public get query(): string {
    return this._query;
  }
}
