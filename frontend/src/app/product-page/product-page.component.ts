import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {
  idParam?: string;
  product: Product = {
    id: 999,
    name: "Spray Bottle",
    description: "The best spray bottle you've ever seen",
    imageSrc: "https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_snake-plant-laurentii_large_gallery_all_all_01.jpg?v=1653528539",
    price: 25.99
  };
  
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.idParam = idParam;
    }
  }

}
