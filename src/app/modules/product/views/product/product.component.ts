import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { deleteSelected } from '../../store/product.actions';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productsObservable: Observable<any>;
  products: any;
  numberOfSelected: number;
  isMoreOpen = false;

  constructor(private store: Store<{ products: any }>) {
    this.productsObservable = this.store.pipe(select('products'));
  }

  ngOnInit() {
    this.productsObservable.subscribe(p => {
      this.products = p.products;
    });
  }

  openMore() {
    this.isMoreOpen = !this.isMoreOpen;
  }

  sortProducts(products: Product[]) {
    return products.sort((a, b) => b.date - a.date);
  }

  deleteSelected() {
    this.store.dispatch(deleteSelected());
    this.openMore();
  }
}
