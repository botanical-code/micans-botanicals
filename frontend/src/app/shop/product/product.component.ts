import { Component, OnInit, Input } from '@angular/core';

export type Product = {
  id?: number
  name?: string
  description?: string
  price?: number
  imageSrc?: string
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product: Product = {};

  constructor() { }

  ngOnInit(): void {
  }

}
