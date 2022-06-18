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
          imageSrc: "https://www.ikea.com/us/en/images/products/fejka-artificial-potted-plant-indoor-outdoor-monstera__0614197_pe686822_s5.jpg?f=xl",
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
