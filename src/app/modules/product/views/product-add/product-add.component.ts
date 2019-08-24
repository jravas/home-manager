import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import * as uuid from 'uuid/v1';
import { Subscription } from 'rxjs';

import { addProduct } from '../../store/product.actions';
import { Product } from '../../models/product';
import { State } from '../../store/product.reducer';
import { getProductsWithTag } from '../../store/product.selectors';

interface ProductFormValues {
  name: string;
  tag: string;
}

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {
  productForm = this.fb.group({
    name: [''],
    tag: ['']
  });

  productsSubscription: Subscription;
  products: Product[];

  constructor(
    private fb: FormBuilder,
    private store: Store<State>,
    private router: Router
  ) {}

  ngOnInit() {}

  addProduct() {
    const { name, tag } = this.productForm.value as ProductFormValues;
    const product = new Product(uuid(), name, tag, Date.now());
    this.store.dispatch(addProduct(product));
    this.productForm.reset();
    this.router.navigate(['product']);
  }

  generateTag() {
    const formValue = this.productForm.value as ProductFormValues;
    const productTag = formValue.name.replace(/ /g, '_').toLowerCase();
    this.productForm.controls.tag.setValue(productTag);
    this.getProductsWithTag(productTag);
  }

  getProductsWithTag(tag: string) {
    this.productsSubscription = this.store
      .pipe(select(getProductsWithTag, tag))
      .subscribe((products: Product[]) => {
        this.products = products.filter(
          (product, index, self) =>
            index === self.findIndex(p => p.tag === product.tag)
        );
      });
  }
  selectTag(event: MouseEvent, product: Product) {
    event.preventDefault();
    this.productForm.controls.tag.setValue(product.tag);
    this.productForm.controls.name.setValue(product.name);
  }
}
