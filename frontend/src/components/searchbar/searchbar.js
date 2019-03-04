import template from './searchbar.pug'
import './searchbar.scss'
import Label from './label/label'
import Search from './search/search'
import Tabs from './tabs/tabs'

export default function Searchbar(node) {
  const parser = new DOMParser();
  const parsedDOM = parser.
    parseFromString(template(), "text/html").
    body.children[0];
  node.appendChild(parsedDOM);

  const searchbarElement = node.querySelector('.nav');
  const label =  Label(searchbarElement);
  const search =  Search(searchbarElement);
  const tabs = Tabs(searchbarElement);

  
  
}