import { createReducer, on } from '@ngrx/store';
import {
  addProduct,
  deleteProduct,
  selectProduct,
  deleteSelected
} from './product.actions';
import { Product } from '../models/product';

export interface State {
  products: Product[];
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
  on(selectProduct, (state, actions) => {
    state.products = state.products.map(product => {
      if (product.id === actions.id) {
        product.selected = !product.selected;
      }
      return product;
    });
    return state;
  }),
  on(deleteSelected, state => {
    state.products = state.products.filter(p => !p.selected);
    return state;
  })
);
