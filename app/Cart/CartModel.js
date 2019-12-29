export class CartModel {
  constructor() {
    this.items = [];
  }

  getSize() {
    return this.items.reduce((acc, curr) => {
      return acc + curr.count;
    }, 0);
  }

  addItem({ item, count }) {
    const oldItem = this.items.findIndex(x => x.item.id === item.id);
    if (oldItem >= 0) {
      this.items[oldItem].count++;
    } else {
      this.items.push({ item, count });
    }
  }

  changeItemCount({ itemId, count }) {
    let item = this.items.find(x => x.item.id === +itemId);
    item.count = +count;
  }

  getTotals() {
    return this.items.length === 0 ? 0 : this.items.reduce((acc, curr) => {
      return acc + curr.item.price * curr.count;
    }, 0);
  }
}