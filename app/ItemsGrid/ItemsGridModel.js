export class ItemsGridModel {

  constructor(data) {
    this.items = JSON.parse(data);
  }

  getItems() {
    this.items = JSON.parse(localStorage.getItem('animals'));
    return this.items;
  }
}