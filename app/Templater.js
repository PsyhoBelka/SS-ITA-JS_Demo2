import {TEMPLATE_URL} from "./config.js";

export const Templater = {

  tplStr: '',
  templates: [],

  getInstance() {
    return this;
  },

  async getTpl(name) {
    let template = this.templates.find(x => x.name === name);

    if (!template) {
      // console.log(`fetch template ${TEMPLATE_URL}/${name}.tpl`);
      await fetch(`${TEMPLATE_URL}/${name}.tpl`)
        .then(data => data.text())
        .then(text => this.templates.push({name: name, str: text}));
    }
  },

  async getHTML(data, tplName) {
    await this.getTpl(tplName);
    let htmlStr = '';
    data.forEach(x => {
      htmlStr += this.templates.find(x => x.name === tplName).str
        .replace(new RegExp('{{menuItemIndex}}', 'g'), x.index)
        .replace(new RegExp('{{menuItemName}}', 'g'), x.name);
    });
    // console.log(`html for tpl ${tplName} - ${htmlStr}`);
    return htmlStr;
  }
};

//(?<={{).+(?=}})