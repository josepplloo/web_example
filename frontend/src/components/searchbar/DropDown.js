export default class DropDown {
  constructor (node, text, returnSelectedText) {
    this.node = node.querySelector('.Search__results-container');
    this.returnSelectedText = returnSelectedText;
    this.dropDownTemplate = {};
    this.mountDropDown(text);
    this.dropDownEvents();
  }

  mountDropDown (text) {
    const textToDisplay = text.map(({course}) => course).sort().slice(0,9);
    this.dropDownTemplate = textToDisplay.map((item)=>{
      return (`
        <li class="username">
          <button class="btn" type="button">${item.name}</button>
        </li>
      `)
    }).join('');
    this.node.innerHTML = this.dropDownTemplate;
    this.dropDownElements = this.node.querySelectorAll('.btn');
  }

  dropDownEvents () {
    this.node.addEventListener('click', (event)=>{
      event.preventDefault();
      const clickedElement = event.target;
      this.returnSelectedText(clickedElement.innerText);
    });
  }
}
