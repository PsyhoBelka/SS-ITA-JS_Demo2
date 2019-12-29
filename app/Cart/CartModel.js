export class CartModel {
  constructor() {
    this.items = [];
  }

  getTotals() {
    return this.items.length === 0 ? 0 : this.items.reduce((acc, curr) => {
      return acc + curr.price;
    }, 0);
  }
}