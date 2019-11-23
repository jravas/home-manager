import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Store, select } from '@ngrx/store';
// product store
import { selectProductById } from '../../store/product.selectors';
// TODO: use combined state interface
import { State } from '../../store/product.reducer';
import { deleteProduct } from '../../store/product.actions';
import { IProduct } from '../../models/product';
// stock store
import { getItemsByTag } from 'src/app/modules/stock/store/stock.selectors';
import { IStockItem } from 'src/app/modules/stock/models/stock-item';

import { EvenetEmmiterService } from '../../../../services/evenet-emmiter.service';

@Component({
  selector: 'app-product-single',
  templateUrl: './product-single.component.html',
  styleUrls: ['./product-single.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductSingleComponent implements OnInit, OnDestroy {
  routeSubscription: Subscription;
  productSubscription: Subscription;
  product: IProduct;
  id: string;
  stockHistorySubscription: Subscription;
  stockHistoryItems: IStockItem[];

  constructor(
    private route: ActivatedRoute,
    // TODO: add combined state type
    private store: Store<any>,
    private router: Router,
    private evenetEmmiterService: EvenetEmmiterService
  ) {}

  ngOnInit() {
    this.routeSubscription = this.route.paramMap.subscribe(
      (params: ParamMap) => {
        this.id = params.get('id');
        this.productSubscription = this.store
          .pipe(select(selectProductById, this.id))
          .subscribe(product => {
            this.product = product;
            // TODO: avoid callback hell
            this.stockHistorySubscription = this.store
              .pipe(select(getItemsByTag, this.product.tag))
              .subscribe(items => {
                this.stockHistoryItems = items;
              });
          });
      }
    );
  }
  ngOnDestroy() {
    this.productSubscription.unsubscribe();
    this.routeSubscription.unsubscribe;
  }

  deleteProduct() {
    this.store.dispatch(deleteProduct({ id: this.id }));
    this.router.navigate(['product']);
  }

  addToStock() {
    this.evenetEmmiterService.addProduct(this.product);
    this.router.navigate([`stock-add`]);
  }
}
