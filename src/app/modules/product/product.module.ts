import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/** Module for dynamic forms */
import { ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ProductComponent } from './views/product/product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductAddComponent } from './views/product-add/product-add.component';
import { ProductSingleComponent } from './views/product-single/product-single.component';

@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent,
    ProductAddComponent,
    ProductSingleComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  exports: [ProductComponent, ProductSingleComponent]
})
export class ProductModule {}
