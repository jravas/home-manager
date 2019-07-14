import { Product } from './product';

describe('Product', () => {
  it('should create an instance', () => {
    expect(new Product(1, 'New Product', 99)).toBeTruthy();
  });
});
