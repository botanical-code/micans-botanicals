import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../product';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {
  currentSearch: string = "";
  results: Product[] = [];

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
    this.searchService.query.subscribe({
      next: (value: string) => {this.currentSearch = value}
    })
    this.searchService.getResults().subscribe({
      next: value => this.results = value
    })
  }

}