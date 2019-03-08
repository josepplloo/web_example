import Helpers from '../helpers.js'

export default class TextRetriever {
  constructor(node, retrieveData, printData){
    this.input = node.querySelector('.Search__input');
    this.input.placeholder = 'Search course and providers';
    this.retrieveData = retrieveData;
    this.printData = printData;
    this.search = Helpers.search;
    this.timeoutID;
    this.bindEvents();
  }

  bindEvents () {
    this.input.addEventListener('keyup', (event) => {
      const inputValue = event.target.value
      const hasTheLength = inputValue.length >= 3
      const isNotEmpty = inputValue.trim() !== ''

      if(hasTheLength && isNotEmpty){
        let url = this.search.concat(inputValue)
        this.debounce(50, () => {
          this.retrieveData(url, (response) => this.printData(response.items))
        })
      }
    })
  }

  debounce (delay, fn) {
    window.clearTimeout(this.timeoutID)
    this.timeoutID = window.setTimeout(fn, delay)
  }

  printSelectedData (text) {
    this.input.value = text
  }
}
