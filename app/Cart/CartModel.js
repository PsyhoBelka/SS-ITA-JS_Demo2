export class CartModel {
  constructor() {
    let storedData = [];

    try {
      storedData = JSON.parse(localStorage.getItem('animal-cart'));
    }
    catch (e) {
      console.error('Error loading cart from storage');
      this.removeCartData();
    }
    this.items = storedData ? storedData : [];
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
    this.updateCartData();
  }

  changeItemCount({ itemId, count }) {
    let item = this.items.find(x => x.item.id === +itemId);
    item.count = +count;
    this.updateCartData();
  }

  getTotals() {
    return this.items.length === 0 ? 0 : this.items.reduce((acc, curr) => {
      return acc + curr.item.price * curr.count;
    }, 0);
  }

  updateCartData() {
    if (this.items.length > 0) {
      localStorage.setItem('animal-cart', JSON.stringify(this.items));
    } else {
      this.removeCartData();
    }
  }

  removeCartData() {
    localStorage.removeItem('animal-cart');
  }
}