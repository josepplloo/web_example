import data from './../../../data/nav.json'
import template from './tabs.pug'
import './tabs.scss'

export default function Tabs(node) {
  const parser = new DOMParser();
  const parsedDOM = parser.parseFromString(template(data), "text/html")
          .body.children[0];
  node.appendChild(parsedDOM);
}
