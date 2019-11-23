import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { deleteSelected } from '../../store/product.actions';
import { IProduct } from '../../models/product';
import { State } from '../../store/product.reducer';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductComponent implements OnInit, OnDestroy {
  productsSubscription: Subscription;
  products: IProduct[];
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

  sortProducts(products: IProduct[]) {
    return products.sort((a, b) => b.date - a.date);
  }

  deleteSelected() {
    this.store.dispatch(deleteSelected());
    this.openMore();
  }
}
