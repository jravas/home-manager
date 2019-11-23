import { createAction, props } from '@ngrx/store';
import { IStockItem } from '../models/stock-item';

enum StockActions {
  AddToStock = 'stock/add',
  DeleteStockItem = 'stock/item-delete'
}

export const addToStock = createAction(
  StockActions.AddToStock,
  props<IStockItem>()
);

export const deleteStockItem = createAction(
  StockActions.DeleteStockItem,
  props<{ id: string }>()
);
