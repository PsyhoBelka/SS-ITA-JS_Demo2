import { API_URL } from '../utils/config.js';

export class ItemsGridModel {

  constructor() {
    fetch(`${API_URL}/animals`)
      .then(resp => resp.json())
      .then(data => localStorage.setItem('animals', JSON.stringify(data)))
      .catch(er => console.error(er));
  }

  getItems() {
    this.items = JSON.parse(localStorage.getItem('animals'));
    return this.items;
  }
}