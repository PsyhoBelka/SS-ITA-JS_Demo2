import { FooterTemplate } from './FooterTemplate.js';

export class FooterView {
  constructor() {
    this.template = FooterTemplate.getHTML();
  }

  render(root) {
    root.insertAdjacentHTML('beforeend', this.template);
  }
}