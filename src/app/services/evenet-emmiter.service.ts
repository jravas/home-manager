import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EvenetEmmiterService {
  addProductEvent = new EventEmitter();
  constructor() {}

  addProduct() {
    this.addProductEvent.emit();
  }
}
