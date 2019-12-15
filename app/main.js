import { API_URL } from './config.js';
import { MenuController } from './Menu/MenuController.js';


fetch(`${API_URL}/categories`).then(data => data.json()).then(json => console.log(json));

const menuController = new MenuController();
menuController.showMenu();
