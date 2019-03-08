import Helpers from '../helpers';


export default class Filters {
  constructor (retrieveData) {
    this.retrieveData = retrieveData;
    this.endpoint = Helpers.endpoint3Courses;
    this.endpointAllCourses = Helpers.endpointAllCourses;
    this.pages = Helpers.pages;
    this.buildCoursesRetriever()
  }

  buildCoursesRetriever() {
    this.retrieveData(this.endpoint, this.mountCards);
    this.retrieveData(this.endpointAllCourses, this.mountAllCards);
    this.bindEvents()
  }

  mountCards (text) {
    let dropDownTemplate = {};
    const node = document.querySelector('.Filters__main-curses');
    const textToDisplay = text.map(({coursePublication}) => coursePublication.course)

    dropDownTemplate = textToDisplay.map((course)=>{
      return (`
        <li class="Filters__main-curse">
          <button class="Search__results-button" type="button">${course.name}</button>
        </li>
      `)
    }).join('');
    node.innerHTML = dropDownTemplate;
  }

  mountAllCards (text) {
    let dropDownTemplate = {};
    const node = document.querySelector('.Filters__others-curses');

    const textToDisplay = text.items.map(({course}) => course);

    dropDownTemplate = textToDisplay.map((item)=>{
      return (`
        <li class="Filters__main-curse">
          <button class="Search__results-button" type="button">${item.name}</button>
        </li>
      `)
    }).join('');

    const parser = new DOMParser();
    const parsedDOM = parser.parseFromString(dropDownTemplate, "text/html")
          .body;
    const mypage = document.createElement('DIV')
    mypage.innerHTML = parsedDOM.innerHTML;
    node.appendChild(mypage);

  }

  bindEvents () {
    window.addEventListener('scroll', (event) => {
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      let offsetHeight = document.body.offsetHeight;
      let clientHeight = document.documentElement.clientHeight;
      if (offsetHeight <= scrollTop + clientHeight) {

        this.endpointAllCourses=this.pages();
        this.retrieveData(this.endpointAllCourses, this.mountAllCards);
      }
    })
  }

}

