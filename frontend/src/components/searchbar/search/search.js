import data from './../../../data/nav.json'
import template from './search.pug'
import './search.scss'

export default function Search(node) {
  const parser = new DOMParser();
  const parsedDOM = parser.parseFromString(template(data), "text/html")
          .body.children[0];
  node.appendChild(parsedDOM);
}
