import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EvenetEmmiterService {
  addProductEvent = new EventEmitter();
  product: any;
  constructor() {}

  addProduct(product: any) {
    this.product = product;
    // this.addProductEvent.emit(product);
  }
}
