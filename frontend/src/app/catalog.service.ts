import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from './category';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  constructor() { }

  getCategories(): Observable<Category[]> {
    return new Observable<Category[]>(subscriber => {
      subscriber.next([
        {
          id: 0,
          name: "Some Category",
          description: "Some category description that's pretty long and needs to wrap around.",
        },
        {
          id: 1,
          name: "Some Category",
          description: "Some category description that's pretty long and needs to wrap around.",
        }
      ])
    })

  }

  getTopProducts(categoryId: number): Observable<Product[]> {
    return new Observable<Product[]>(subscriber => {
      subscriber.next(
        [
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
          },
          {
            id: 2,
            name: "Some Product",
            description: "Some product description that's pretty long and needs to wrap around.",
            imageSrc: "https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_snake-plant-laurentii_large_gallery_all_all_01.jpg?v=1653528539",
            price: 25.99
          },
          {
            id: 3,
            name: "Some Product",
            description: "Some product description that's pretty long and needs to wrap around.",
            imageSrc: "https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_snake-plant-laurentii_large_gallery_all_all_01.jpg?v=1653528539",
            price: 25.99
          },
          {
            id: 4,
            name: "Some Product",
            description: "Some product description that's pretty long and needs to wrap around.",
            imageSrc: "https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_snake-plant-laurentii_large_gallery_all_all_01.jpg?v=1653528539",
            price: 25.99
          },
          {
            id: 5,
            name: "Some Product",
            description: "Some product description that's pretty long and needs to wrap around.",
            imageSrc: "https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_snake-plant-laurentii_large_gallery_all_all_01.jpg?v=1653528539",
            price: 25.99
          },
          {
            id: 6,
            name: "Some Product",
            description: "Some product description that's pretty long and needs to wrap around.",
            imageSrc: "https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_snake-plant-laurentii_large_gallery_all_all_01.jpg?v=1653528539",
            price: 25.99
          },
          {
            id: 7,
            name: "Some Product",
            description: "Some product description that's pretty long and needs to wrap around.",
            imageSrc: "https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_snake-plant-laurentii_large_gallery_all_all_01.jpg?v=1653528539",
            price: 25.99
          },
          {
            id: 8,
            name: "Some Product",
            description: "Some product description that's pretty long and needs to wrap around.",
            imageSrc: "https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_snake-plant-laurentii_large_gallery_all_all_01.jpg?v=1653528539",
            price: 25.99
          },
          {
            id: 9,
            name: "Some Product",
            description: "Some product description that's pretty long and needs to wrap around.",
            imageSrc: "https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_snake-plant-laurentii_large_gallery_all_all_01.jpg?v=1653528539",
            price: 25.99
          }
        ]
      )
    })
  }
}
