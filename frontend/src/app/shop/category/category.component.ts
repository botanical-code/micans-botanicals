import { Component, OnInit, Input, OnChanges, SimpleChanges, AfterContentInit } from '@angular/core';
import { CatalogService } from 'src/app/catalog.service';
import { Category } from 'src/app/category';
import { Product } from 'src/app/product';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  @Input()
  category: Category = {};
  products: Product[] = [];

  constructor(private catalogService: CatalogService) { }

  ngOnInit(): void {
    if (this.category.id !== undefined) {
      this.catalogService.getTopProducts(this.category.id).subscribe({
        next: (products) => {
          this.products = products;
        }
      })
    }
  }
}
