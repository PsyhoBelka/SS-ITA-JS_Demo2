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
    for (const sub in this.subscribers[event]) {
      sub(data);
    }
  }

  static unsubscribe(event, func) {
    if (this.subscribers.hasOwnProperty(event) && this.subscribers[event].includes(func)) {
      this.subscribers[event].slice(this.subscribers[event].findIndex(x => x === func), 1);
    }
  }
}