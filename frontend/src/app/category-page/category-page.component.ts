import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CatalogService } from '../catalog.service';
import { Category } from '../category';
import { Product } from '../product';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss']
})
export class CategoryPageComponent implements OnInit {
  idParam?: string;
  category: Category = {
    id: 999,
    name: "Some Category",
    description: "Some filler description that needs to be replaced by an api call."
  }

  products?: Product[] = [];

  constructor(private route: ActivatedRoute, private catalogService: CatalogService) { }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.idParam = idParam;
      this.catalogService.getTopProducts(+idParam).subscribe({
        next: (products) => {
          this.products = products;
        }
      })
    }
  }

}
