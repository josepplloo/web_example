import data from './../../../data/nav.json'
import template from './label.pug'
import './label.scss'

export default function Label(node) {
  const parser = new DOMParser();
  const parsedDOM = parser.
    parseFromString(template(data), "text/html").
    body.children[0];
  node.appendChild(parsedDOM);
}