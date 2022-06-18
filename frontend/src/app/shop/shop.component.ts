import { Component, Input, OnInit } from '@angular/core';
import { Category } from './category/category.component';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  categories: Category[] = [
    {
      id: 0,
      name: "Some Category",
      description: "Some category description that's pretty long and needs to wrap around.",
      products: [
        {
          id: 0,
          name: "Some Product",
          description: "Some product description that's pretty long and needs to wrap around.",
          imageSrc: "https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_snake-plant-laurentii_large_gallery_all_all_01.jpg?v=1653528539",
          price: 25.99
        },
        {
          id: 1,
          name: "Some Product",
          description: "Some product description that's pretty long and needs to wrap around.",
          imageSrc: "https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_snake-plant-laurentii_large_gallery_all_all_01.jpg?v=1653528539",
          price: 25.99
        }
      ]
    },
    {
      id: 0,
      name: "Some Category",
      description: "Some category description that's pretty long and needs to wrap around.",
      products: [
        {
          id: 0,
          name: "Some Product",
          description: "Some product description that's pretty long and needs to wrap around.",
          imageSrc: "https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_snake-plant-laurentii_large_gallery_all_all_01.jpg?v=1653528539",
          price: 25.99
        },
        {
          id: 1,
          name: "Some Product",
          description: "Some product description that's pretty long and needs to wrap around.",
          imageSrc: "https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_snake-plant-laurentii_large_gallery_all_all_01.jpg?v=1653528539",
          price: 25.99
        }
      ]
    }
  ]

  constructor() { 
  }

  ngOnInit(): void {
  }

}
