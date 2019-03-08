import Helpers from '../helpers';


export default class Filters {
  /**
   * Build the cards
   * @param {Function} retrieveData
   */
  constructor (retrieveData) {
    this.retrieveData = retrieveData;
    ({ allCourses: this.allCourses,
       preview: this.preview,
       pages:this.pages } = Helpers);

    this.buildCourses();
  }

  buildCourses() {
    this.retrieveData(this.preview, this.mountCards);
    this.retrieveData(this.allCourses, this.mountAllCards);
    this.bindEvents()
  }

  mountCards(data) {
    const mainCourses = document.querySelector('.Filters__main-courses');
    const coursesList = data.map(({ coursePublication }) => coursePublication.course);

    const dropDownTemplate = coursesList.map(({ featuredBanner, name }) => {
      return (`
        <li class="Filters__main-course">
          <article class="Filters__article">
            <div>
              <img alt="Featured course banner" class="Filters__image-course"
              src="https://storage.cebroker.com/CEBroker/${featuredBanner}">
            </div>
            <div>
              <h1>${name}</h1>
              <h2></h2>
            </div>
          </article>
        </li>
      `)
    }).join('');
    mainCourses.innerHTML = dropDownTemplate;
  }

  mountAllCards (data) {
    const otherCourses = document.querySelector('.Filters__other-courses');
    const coursesList = data.items.map(({ course }) => course);
    const dropDownTemplate = coursesList.map(({ name, provider })=>{
      return (`
      <li class="Filters__main-curse">
      <article class="Filters__article">
        <div>
          <h1>${name}</h1>
          <h2>${provider.name}</h2>
        </div>
      </article>
    </li>
      `)
    }).join('');

    const parser = new DOMParser();
    const parsedDOM = parser.parseFromString(dropDownTemplate, "text/html").body;
    const mypage = document.createElement('DIV')
    mypage.innerHTML = parsedDOM.innerHTML;
    otherCourses.appendChild(mypage);

  }

  /**
   * Get more data while scroll down
   * the pages function plus 1 to the URL
   */
  bindEvents () {
    window.addEventListener('scroll', (event) => {
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      let offsetHeight = document.body.offsetHeight;
      let clientHeight = document.documentElement.clientHeight;
      if (offsetHeight <= scrollTop + clientHeight) {
        this.allCourses = this.pages();
        this.retrieveData(this.allCourses, this.mountAllCards);
      }
    })
  }

}

