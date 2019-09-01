import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';
import * as uuid from 'uuid/v1';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

import { State } from '../../store/stock.reducer';
import { EvenetEmmiterService } from '../../../../services/evenet-emmiter.service';
import { StockItem } from '../../models/stock-item';
import { addToStock } from '../../../stock/store/stock.actions';

interface StockFormValues {
  name: string;
  price: number;
}

@Component({
  selector: 'app-stock-add',
  templateUrl: './stock-add.component.html',
  styleUrls: ['./stock-add.component.scss']
})
export class StockAddComponent implements OnInit, OnDestroy {
  eventSubscription: Subscription;
  productForm = this.fb.group({
    price: ['']
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
  }

  ngOnDestroy() {
    this.eventSubscription.unsubscribe();
  }

  addProduct() {
    const formValue = this.productForm.value as StockFormValues;
    const { name, tag, quantity } = this.evenetEmmiterService.product;
    const stockItem = new StockItem(
      uuid(),
      name,
      tag,
      formValue.price,
      quantity,
      Date.now()
    );

    this.store.dispatch(addToStock(stockItem));
    this.router.navigate(['stock']);
  }
}
