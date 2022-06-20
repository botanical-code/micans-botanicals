import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {
  currentSearch: string = "";
  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
    this.searchService.query.subscribe({
      next: (value: string) => {this.currentSearch = value}
    })
  }

}