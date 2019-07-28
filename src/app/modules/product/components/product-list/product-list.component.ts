import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import { selectProduct } from '../../store/product.actions';
import { State } from '../../store/product.reducer';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  @Input() products;

  constructor(private store: Store<State>) {}

  ngOnInit() {
    console.log(this.products);
  }

  onChecked(e: any, id: string) {
    e.preventDefault();
    e.stopPropagation();
    this.store.dispatch(selectProduct({ id }));
  }

  // deleteSelected() {
  //   this.store.dispatch(deleteSelected());
  // }
  // get selectedProducts() {
  //   return this.products.filter(p => p.selected).length;
  // }
}
