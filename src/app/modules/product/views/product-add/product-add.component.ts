import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
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
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {
  @ViewChild('inputElement') inputElement: ElementRef;
  productForm = this.fb.group({
    name: ['']
  });

  constructor(
    private fb: FormBuilder,
    private store: Store<{ products: any }>,
    private router: Router
  ) {}

  ngOnInit() {}

  addProduct() {
    const formValue = this.productForm.value as ProductFormValues;
    const product = new Product(uuid(), formValue.name, Date.now());
    this.store.dispatch(addProduct(product));
    this.productForm.reset();
    this.router.navigate(['product']);
  }

  generateTag() {
    const formValue = this.productForm.value as ProductFormValues;
    // console.log(formValue.name);
  }
}
