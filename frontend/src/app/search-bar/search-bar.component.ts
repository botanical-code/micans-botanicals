import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  private inputTimer?: any;

  constructor(private router: Router, private searchService: SearchService) { }

  ngOnInit(): void {
  }

  handleSearchFocus(event: any): void {
    if (this.router.url.includes('search')) {
      return
    }
    this.router.navigate(['/search'])
  }

  /**
   * Handle search bar inputs. All inputs < length 3 are equivalent to empty search.
   * Only update the search string 500ms after not typing.
   * @param event input change
   * @returns void
   */
  handleSearchChange(event: any): void {
    if (event.target.value.length < 3) {
      this.searchService.query = "";
      return
    }

    clearTimeout(this.inputTimer)

    this.inputTimer = setTimeout(() => {
      this.searchService.query = event.target.value;
    }, 500)
  }

}
