import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import { State } from '../../store/product.reducer';
import { Product } from '../../models/product';

interface ProductsChecked extends Product {
  selected: boolean;
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  @Input() products;
  selectedProducts = [];

  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.products = this.products.map((p: Product) => ({
      ...p,
      selected: false
    })) as ProductsChecked;
  }

  onChecked(e: MouseEvent, id: string) {
    e.preventDefault();
    e.stopPropagation();
    this.selectedProducts = [];

    this.products = this.products.map((p: ProductsChecked) => {
      if (p.id === id) {
        p = { ...p, selected: !p.selected };
      }

      if (p.selected) {
        this.selectedProducts.push(p.id);
      }
      return p;
    });
  }

  // deleteSelected() {
  //   this.store.dispatch(deleteSelected());
  // }
  // get selectedProducts() {
  //   return this.products.filter(p => p.selected).length;
  // }
}
