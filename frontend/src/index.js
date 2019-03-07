import './main.scss'
//import Menu from './components/menu/menu'
import Searchbar from './components/searchbar/searchbar'
import DataRetriever from './components/searchbar/DataRetriever';

//const menu = new Menu(document.body);
const dataRetriever = new DataRetriever();
const searchbar = new Searchbar('.Search__input-container',dataRetriever.get);
