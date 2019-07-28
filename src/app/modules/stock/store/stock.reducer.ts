import { createReducer, on } from '@ngrx/store';
import { addToStock } from './stock.actions';
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
    console.log(actions);
    state.stock = [...state.stock, actions];
    return state;
  })
);
