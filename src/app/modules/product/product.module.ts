import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/** Module for dynamic forms */
import { ReactiveFormsModule } from '@angular/forms';
import { localStorageSync } from 'ngrx-store-localstorage';

import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatInputModule,
  MatButtonModule,
  MatListModule,
  MatDialogModule
} from '@angular/material';

import {
  StoreModule,
  ActionReducerMap,
  ActionReducer,
  MetaReducer
} from '@ngrx/store';
import { productsReducer } from './store/product.reducer';
import { ProductComponent } from './views/product/product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductSingleComponent } from './views/product-single/product-single.component';

const reducers: ActionReducerMap<any> = { products: productsReducer };

export function localStorageSyncReducer(
  reducer: ActionReducer<any>
): ActionReducer<any> {
  return localStorageSync({ keys: ['products'], rehydrate: true })(reducer);
}
const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];

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
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatDialogModule,
    StoreModule.forRoot(reducers, { metaReducers })
  ],
  exports: [ProductComponent, ProductSingleComponent],
  entryComponents: [ProductAddComponent]
})
export class ProductModule {}
