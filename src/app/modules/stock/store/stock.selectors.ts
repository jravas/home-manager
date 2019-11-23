import { createSelector } from '@ngrx/store';
import { State } from './stock.reducer';
import { IStockItem } from '../models/stock-item';

export const selectFromStock = (state: State) => state.stock;

export const getFromStockById = createSelector(selectFromStock, (state, prop) =>
  state.stock.find(p => p.id === prop)
);

export const getItemsByTag = createSelector(selectFromStock, (state, prop) =>
  state.stock.filter(p => p.tag === prop)
);
