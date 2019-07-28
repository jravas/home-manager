import { Product } from './product';

describe('Product', () => {
  it('should create an instance', () => {
    expect(
      new Product('21431dsafaf', 'New Product', new Date(), false)
    ).toBeTruthy();
  });
});
