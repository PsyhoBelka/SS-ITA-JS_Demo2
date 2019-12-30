import { T_API_KEY } from '../utils/config.js';

export class Bot {

  static sendOrderMsg(data) {
    return fetch(`https://api.telegram.org/bot${T_API_KEY}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: 476950254,
        text: this.formatData(data),
        disable_notification: true,
      }),
    })
      .catch(er => console.error(er));
  }

  static formatData(data) {
    return {
      items: data.map(x => {
        return { id: x.item.id, breed: x.item.breed, count: x.count, price: x.item.price };
      }), total_price: data.reduce((acc, curr) => acc + curr.item.price * curr.count, 0),
    };
  }
}