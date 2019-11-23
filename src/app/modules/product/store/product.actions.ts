import { createAction, props } from '@ngrx/store';
import { IProduct } from '../models/product';

enum ProductActions {
  AddProduct = 'product/add',
  DeleteProduct = 'product/delete',
  DeleteSelected = 'product/delete-selected'
}

export const addProduct = createAction(
  ProductActions.AddProduct,
  props<IProduct>()
);

export const deleteProduct = createAction(
  ProductActions.DeleteProduct,
  props<{ id: string }>()
);

export const deleteSelected = createAction(ProductActions.DeleteSelected);
