import { createAction, props } from '@ngrx/store';
import { Product } from '../models/product';

enum ProductActions {
  AddProduct = 'product/add',
  DeleteProduct = 'product/delete'
}

export const addProduct = createAction(
  ProductActions.AddProduct,
  props<Product>()
);

export const deleteProduct = createAction(
  ProductActions.DeleteProduct,
  props<{ id: string }>()
);
