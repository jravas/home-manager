import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EvenetEmmiterService {
  showActionsEvent = new EventEmitter();
  submitFormEvent = new EventEmitter();
  product: any;
  constructor() {}

  addProduct(product: any) {
    this.product = product;
    // this.addProductEvent.emit(product);
  }

  showActions() {
    this.showActionsEvent.emit();
  }

  submitForm() {
    this.submitFormEvent.emit();
  }
}
