import { T_API_KEY } from '../utils/config.js';

export class Bot {

  static sendOrderMsg(data) {
    return fetch(`https://api.telegram.org/bot${T_API_KEY}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: -377489566,
        text: this.formatData(data),
        disable_notification: true,
        parse_mode: 'Markdown',
      }),
    })
      .catch(er => console.error(er));
  }

  static formatData(data) {
    let output = '';
    output += '=== *Order data* ===\n';
    output += data.items.map(x => `(${x.item.id}) ${x.item.breed} - $${x.item.price}, count ${x.count}  (total ${x.count * x.item.price})\n`).join('');
    output += '--------------------\n';
    output += `Total price: ${data.items.reduce((acc, curr) => acc + curr.item.price * curr.count, 0)}\n`;
    output += '=== *Customer data* ===\n';
    output += `Name: ${data.customerData.customerName}\n`;
    output += `Address: ${data.customerData.customerAddress}\n`;
    output += `Email: ${data.customerData.customerEmail}\n`;
    output += `Phone: ${data.customerData.customerPhone}\n`;
    output += `Notes: ${data.customerData.customerNotes}\n`;
    output += '=== *End order* ===';
    return output;
  }
}