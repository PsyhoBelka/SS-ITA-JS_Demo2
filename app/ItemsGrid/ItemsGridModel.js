import { API_URL } from '../utils/config.js';

export class ItemsGridModel {

  constructor() {
    this.items = [];
    this.url = `${API_URL}/animals`;
  }

  getItems() {
    return fetch(this.url).then(data => data.json());
  }
}