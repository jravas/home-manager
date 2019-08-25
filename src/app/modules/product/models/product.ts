export class Product {
  constructor(
    public id: string,
    public name: string,
    public tag: string,
    public quantity: number,
    public date: number // public selected: boolean
  ) {}
}
