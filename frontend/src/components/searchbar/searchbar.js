import TextRetriever from './TextRetriever';
import DropDown from './DropDown';

export default class SearchBar {
  constructor (selector, retrieveData) {
    this.node = document.querySelector(selector)
    this.retrieveData = retrieveData
    this.buildTextRetriever()
  }

  buildTextRetriever() {
    this.textRetriever = new TextRetriever(this.node,
      this.retrieveData,
      this.buildDropDown.bind(this)
    )
  }

  buildDropDown(response) {
    this.dropDown = new DropDown(this.node, response, this.printSelectedText.bind(this))
  }

  printSelectedText (text) {
    this.textRetriever.printSelectedData(text)
  }

}

