import data from './../../../data/nav.json'
import template from './links.pug'
import './links.scss'

export default function Links(node) {
  const parser = new DOMParser();
  const parsedDOM = parser.parseFromString(template(data), "text/html")
          .body.children[0];
  node.appendChild(parsedDOM);
}
