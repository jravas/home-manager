import { createReducer, on } from '@ngrx/store';
import { addProduct, deleteProduct, deleteSelected } from './product.actions';
import { IProduct } from '../models/product';

export interface State {
  products: IProduct[];
}

export const initialState: State = {
  products: []
};

export const productsReducer = createReducer(
  initialState,
  on(addProduct, (state, actions) => {
    state.products = [...state.products, actions];
    return state;
  }),
  on(deleteProduct, (state, actions) => {
    state.products = state.products.filter(
      product => product.id !== actions.id
    );
    return state;
  }),
  on(deleteSelected, (state, actions) => {
    // state.products
    return state;
  })
);
