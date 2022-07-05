import { Component, Input, OnInit } from '@angular/core';
import { CatalogService } from '../catalog.service';
import { Category } from '../category';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  categories?: Category[]

  constructor(private catalogService: CatalogService) {
    this.catalogService.getCategories().subscribe({
      next: categories => this.categories = categories
    })
  }

  ngOnInit(): void {
  }
}
