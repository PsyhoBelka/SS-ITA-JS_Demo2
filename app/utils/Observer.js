export class Observer {
  static subscribers = {};

  static subscribe = (event, func) => {
    if (!this.subscribers.hasOwnProperty(event)) {
      this.subscribers[event] = [];
    }
    this.subscribers[event].push(func);
  };

  static notify = (event, data) => {
    if (this.subscribers.hasOwnProperty(event)) {
      this.subscribers[event].forEach(sub => sub(data));
    }
  };

  static unsubscribe = (event, func) => {
    if (this.subscribers.hasOwnProperty(event) && this.subscribers[event].includes(func)) {
      this.subscribers[event] = this.subscribers[event].filter(x => x !== func);
    }
  };
}

/*
page-change           ItemsGridController.showGrid
clear-search-input    ItemsGridController.clearSearchInputHandler
search-input          ItemsGridController.searchInputHandler

details-button-click  ModalDetailsController.showModal

buy-button-click      CartModalController.addToCart
clear-button-click    CartModalController.clearCart
finish-order          CartModalController.confirmCart

show-cart             CartController.renderModal
header-load           CartController.renderLink
 */