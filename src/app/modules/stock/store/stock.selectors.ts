import { createSelector } from '@ngrx/store';
import { State } from './stock.reducer';

export const selectFromStock = (state: State) => state.stock;

export const getFromStockById = createSelector(
  selectFromStock,
  (state, prop) => state.stock.find(p => p.id === prop)
);
