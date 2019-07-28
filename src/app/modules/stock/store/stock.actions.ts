import { createAction, props } from '@ngrx/store';
import { StockItem } from '../models/stock-item';

enum StockActions {
  AddToStock = 'stock/add'
}

export const addToStock = createAction(
  StockActions.AddToStock,
  props<StockItem>()
);
