import { HeaderTemplate } from './HeaderTemplate.js';

export class HeaderView {
  render() {
    document.querySelector('.app_root').insertAdjacentHTML('beforeend', HeaderTemplate.getHTML());
  }
}