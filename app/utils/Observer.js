export class Observer {
  static subscribers = {};

  static getActions() {
    return {
      subscribe: this.subscribe,
      notify: this.notify,
      unsubscribe: this.unsubscribe,
    };
  }

  static subscribe(event, func) {
    if (!this.subscribers.hasOwnProperty(event)) {
      this.subscribers[event] = [];
    }
    this.subscribers[event].push(func);
  }

  static notify(event, data) {
    if (this.subscribers.hasOwnProperty(event)) {
      this.subscribers[event].forEach(sub => sub(data));
    }
  }

  static unsubscribe(event, func) {
    if (this.subscribers.hasOwnProperty(event) && this.subscribers[event].includes(func)) {
      this.subscribers[event] = this.subscribers[event].filter(x => x !== func);
    }
  }
}