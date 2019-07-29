import { createAction, props } from '@ngrx/store';
import { StockItem } from '../models/stock-item';

enum StockActions {
  AddToStock = 'stock/add',
  DeleteStockItem = 'stock/item-delete'
}

export const addToStock = createAction(
  StockActions.AddToStock,
  props<StockItem>()
);

export const deleteStockItem = createAction(
  StockActions.DeleteStockItem,
  props<{ id: string }>()
);
