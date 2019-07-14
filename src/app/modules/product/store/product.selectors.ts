import { createSelector } from '@ngrx/store';
import { State } from './product.reducer';

export const selectProduct = (state: State) => state.products;

export const selectProductById = createSelector(
  selectProduct,
  (state, prop) => state.products.find(p => p.id === prop)
);
