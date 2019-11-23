export class Product {
  constructor(
    public id: string,
    public name: string,
    public tag: string,
    public quantity: number,
    public date: number
  ) {}
}

export interface IProduct {
  id: string;
  name: string;
  tag: string;
  quantity: number;
  date: number;
}
