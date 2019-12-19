import { API_URL } from '../utils/config.js';

export class MenuModel {
  constructor() {
    this.items = [];
    this.url = `${API_URL}/categories`;
  }

  getItems() {
    return fetch(this.url).then(data => data.json());
  }
}