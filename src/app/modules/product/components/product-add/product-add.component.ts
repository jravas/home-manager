import {
  Component,
  OnInit,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  ElementRef,
  OnChanges,
  SimpleChanges,
  SimpleChange
} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as uuid from 'uuid/v1';

import { addProduct } from '../../store/product.actions';
import { Product } from '../../models/product';

interface ProductFormValues {
  name: string;
  price: number;
}

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit, OnChanges {
  @Input() isAddNewVIsible;
  @Output() closeAddNew = new EventEmitter<boolean>();
  @ViewChild('inputElement') inputElement: ElementRef;
  productForm = this.fb.group({
    name: ['']
  });

  constructor(
    private fb: FormBuilder,
    private store: Store<{ products: any }>
  ) {}

  ngOnInit() {
    //this.inputElement.nativeElement.focus();
  }
  ngOnChanges(channges: SimpleChanges) {
    const isAddNewVIsible = channges.isAddNewVIsible;
    const prev = isAddNewVIsible.previousValue;
    const current = isAddNewVIsible.currentValue;
    if (current) {
      this.inputElement.nativeElement.focus();
    }
  }

  addProduct() {
    const formValue = this.productForm.value as ProductFormValues;
    const product = new Product(
      uuid(),
      formValue.name,
      // formValue.price,
      new Date(),
      false
    );
    console.log(product);
    this.store.dispatch(addProduct(product));
    this.productForm.reset();
    this.closeAddNew.emit(false);
  }
}
