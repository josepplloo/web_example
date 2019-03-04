import data from './../../../data/nav.json'
import template from './logo.pug'
import './logo.scss'

export default function Logo(node) {
  const parser = new DOMParser();
  const parsedDOM = parser.
    parseFromString(template(data), "text/html")
    .body.children[0];
  node.appendChild(parsedDOM);
}