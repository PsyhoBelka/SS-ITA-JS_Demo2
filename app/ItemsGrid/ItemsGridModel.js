export class ItemsGridModel {

  constructor(data) {
    this.items = JSON.parse(data);
  }

  getItems() {
    return this.items;
  }
}