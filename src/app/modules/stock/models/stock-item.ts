export class StockItem {
  constructor(
    public id: string,
    public name: string,
    public tag: string,
    public price: number,
    public quantity: number,
    public date: number
  ) {}
}

export interface IStockItem {
  id: string;
  name: string;
  tag: string;
  price: number;
  quantity: number;
  date: number;
}
