import { createReducer, on } from '@ngrx/store';
import { addToStock, deleteStockItem } from './stock.actions';
import { StockItem } from '../models/stock-item';
export interface State {
  stock: StockItem[];
}

export const initialState: State = {
  stock: []
};

export const stockReducer = createReducer(
  initialState,
  on(addToStock, (state, actions) => {
    state.stock = [...state.stock, actions];
    return state;
  }),
  on(deleteStockItem, (state, actions) => {
    state.stock = state.stock.filter(stockItem => stockItem.id !== actions.id);
    return state;
  })
);
