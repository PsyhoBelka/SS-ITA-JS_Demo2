export class Templater {
  constructor(url) {
    this.tplStr = '';
    this.url = url;
    this.getTpl();
  }

  getTpl() {
    return fetch(this.url)
      .then(data => data.text())
      .then(text => this.tplStr = text);
    // .then(() => console.log(this.tplStr));
  }

  getHTML(data) {
    this.getTpl();
    let htmlStr = '';
    data.forEach(x => {
      htmlStr += this.tplStr
        .replace(new RegExp('{{menuItemIndex}}', 'g'), x.index)
        .replace(new RegExp('{{menuItemName}}', 'g'), x.name);
    });
    return htmlStr;
    // console.log(htmlStr);
  }
}

//(?<={{).+(?=}})