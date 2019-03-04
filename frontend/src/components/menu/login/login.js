import data from './../../../data/nav.json'
import template from './login.pug'
import './login.scss'

export default function Login(node) {
  const parser = new DOMParser();
  const parsedDOM = parser.parseFromString(template(data), "text/html")
          .body.children[0];
  node.appendChild(parsedDOM);
}