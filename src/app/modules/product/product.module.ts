import { NgModule, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';
/** Module for dynamic forms */
import { ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import {
//   MatInputModule,
//   MatButtonModule,
//   MatListModule,
//   MatDialogModule
// } from '@angular/material';

import {
  StoreModule,
  ActionReducerMap,
  MetaReducer,
  combineReducers
} from '@ngrx/store';
import { productsReducer } from './store/product.reducer';
import { ProductComponent } from './views/product/product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductSingleComponent } from './views/product-single/product-single.component';
import { localStorageSyncReducer } from './store/localStorage';

import { State } from './store/product.reducer';

const reducers: ActionReducerMap<any> = { products: productsReducer };

export const REDUCER_TOKEN = new InjectionToken<ActionReducerMap<State>>(
  'products'
);

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
    // MatInputModule,
    // MatButtonModule,
    // MatListModule,
    // MatDialogModule,
    StoreModule.forRoot(REDUCER_TOKEN, { metaReducers })
  ],
  exports: [ProductComponent, ProductSingleComponent],
  entryComponents: [ProductAddComponent],
  providers: [
    {
      provide: REDUCER_TOKEN,
      useValue: reducers
    }
  ]
})
export class ProductModule {}
