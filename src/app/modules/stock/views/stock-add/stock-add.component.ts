import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';
import * as uuid from 'uuid/v1';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

import { State } from '../../store/stock.reducer';
import { EvenetEmmiterService } from '../../../../services/evenet-emmiter.service';
import { StockItem, IStockItem } from '../../models/stock-item';
import { addToStock } from '../../../stock/store/stock.actions';

interface StockFormValues {
  name: string;
  price: number;
  amount: number;
  unit: string;
}

@Component({
  selector: 'app-stock-add',
  templateUrl: './stock-add.component.html',
  styleUrls: ['./stock-add.component.scss']
})
export class StockAddComponent implements OnInit, OnDestroy {
  eventSubscription: Subscription;
  productForm = this.fb.group({
    price: [''],
    quantity: [''],
    amount: [''],
    unit: ['']
  });
  constructor(
    private fb: FormBuilder,
    private store: Store<State>,
    private evenetEmmiterService: EvenetEmmiterService,
    private router: Router
  ) {}

  ngOnInit() {
    this.eventSubscription = this.evenetEmmiterService.submitFormEvent.subscribe(
      () => this.addProduct()
    );
    this.loadProduct();
  }

  ngOnDestroy() {
    this.eventSubscription.unsubscribe();
  }

  loadProduct() {
    const { quantity } = this.evenetEmmiterService.product;
    this.productForm.get('quantity').patchValue(quantity);
  }

  addProduct() {
    const { price, amount, unit } = this.productForm.value as StockFormValues;
    const { name, tag, quantity } = this.evenetEmmiterService.product;

    const stockItem: IStockItem = new StockItem(
      uuid(),
      name,
      tag,
      price,
      quantity,
      Date.now(),
      amount,
      unit
    );

    this.store.dispatch(addToStock(stockItem));
    this.router.navigate(['stock']);
  }
}
