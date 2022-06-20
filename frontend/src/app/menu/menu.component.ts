import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { CatalogService } from '../catalog.service';
import { Category } from '../category';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  categories: Category[] = []
  constructor(private catalogService: CatalogService, private location: Location) { }

  ngOnInit(): void {
    this.catalogService.getCategories().subscribe({
      next: categories => this.categories = categories
    })
  }

  goBack():void {
    this.location.back()
  }

}
