export class Product {
  constructor(
    public id: string,
    public name: string,
    // public price: number,
    public date: Date,
    public selected: boolean
  ) {}
}
