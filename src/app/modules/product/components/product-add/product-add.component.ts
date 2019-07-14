import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as uuid from 'uuid/v1';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

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
export class ProductAddComponent implements OnInit {
  productForm = this.fb.group({
    name: ['']
  });

  constructor(
    private fb: FormBuilder,
    private store: Store<{ products: any }>,
    public dialogRef: MatDialogRef<ProductAddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {}

  addProduct() {
    const formValue = this.productForm.value as ProductFormValues;
    const product = new Product(
      uuid(),
      formValue.name,
      // formValue.price,
      new Date()
    );

    this.store.dispatch(addProduct(product));
    this.productForm.reset();
  }
}
