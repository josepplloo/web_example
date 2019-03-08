import './main.scss'
import Searchbar from './components/searchbar/searchbar'
import DataRetriever from './components/searchbar/DataRetriever';
import Filters from './components/filters/filters';

const dataRetriever = new DataRetriever();
const searchbar = new Searchbar('.Search__input-container', dataRetriever.get);
const filters = new Filters(dataRetriever.get);
