import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product/product.component';

export type Category = {
  id?: number
  name?: string
  description?: string
  products?: Product[]
}

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  @Input() category: Category = {};

  constructor() { }

  ngOnInit(): void {
  }

}
