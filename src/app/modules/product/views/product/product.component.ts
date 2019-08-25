import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { deleteSelected } from '../../store/product.actions';
import { Product } from '../../models/product';
import { State } from '../../store/product.reducer';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, OnDestroy {
  productsSubscription: Subscription;
  products: Product[];
  numberOfSelected: number;
  isMoreOpen = false;

  constructor(private store: Store<State>) {
    // this.productsObservable = this.store.pipe(select('products'));
  }

  ngOnInit() {
    this.productsSubscription = this.store
      .pipe(select('products'))
      .subscribe((p: State) => {
        this.products = p.products;
      });
  }

  ngOnDestroy() {
    this.productsSubscription.unsubscribe();
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