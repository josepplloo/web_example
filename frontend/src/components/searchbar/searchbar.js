import TextRetriever from './TextRetriever';
import DropDown from './DropDown';

/**
 * @param {Node} selector
 * @param {Function} retrieveData
 *
 */
export default class SearchBar {
  constructor (selector, retrieveData) {
    this.node = document.querySelector(selector)
    this.retrieveData = retrieveData
    this.buildTextRetriever()
  }

  /**
   * Gets de data.
   */
  buildTextRetriever() {
    this.textRetriever = new TextRetriever(this.node,
      this.retrieveData,
      this.buildDropDown.bind(this)
    );
  }

  /**
   * Init the DropDown element
   * @param {Object} response
   */
  buildDropDown(response) {
    this.dropDown = new DropDown(this.node, response, this.printSelectedText.bind(this));
  }

  printSelectedText (text) {
    this.textRetriever.printSelectedData(text);
  }

}

