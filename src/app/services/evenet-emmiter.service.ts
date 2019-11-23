import { Injectable, EventEmitter } from '@angular/core';
import { IProduct } from '../modules/product/models/product';

@Injectable({
  providedIn: 'root'
})
export class EvenetEmmiterService {
  showActionsEvent = new EventEmitter();
  submitFormEvent = new EventEmitter();
  product: IProduct;
  constructor() {}

  addProduct(product: IProduct) {
    this.product = product;
  }

  showActions() {
    this.showActionsEvent.emit();
  }

  submitForm() {
    this.submitFormEvent.emit();
  }
}
