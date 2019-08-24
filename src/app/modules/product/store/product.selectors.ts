import { createSelector } from '@ngrx/store';
import { State } from './product.reducer';
import * as Fuse from 'fuse.js';

export const selectProduct = (state: State) => state.products;

export const selectProductById = createSelector(
  selectProduct,
  (state, prop) => state.products.find(p => p.id === prop)
);

const options = {
  keys: ['tag', 'name'],
  threshold: 0.3
};

export const getProductsWithTag = createSelector(
  selectProduct,
  (state, prop) => new Fuse(state.products, options).search(prop)
);
