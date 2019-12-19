import { ItemsGridController } from './ItemsGrid/ItemsGridController.js';
import { MenuController } from './Menu/MenuController.js';
import { Observer } from './utils/Observer.js';

const menuController = new MenuController(Observer.getActions());
const itemsGridController = new ItemsGridController((Observer.getActions()));


//todo observer

menuController.showMenu();
itemsGridController.showGrid();

// fetch(`${API_URL}/categories`).then(data => data.json()).then(json => console.log(json));
//show that tpl was cashed
// window.menu=menuController;