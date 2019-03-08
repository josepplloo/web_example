fronted-exercise
================
  _Multi Page Application Exercise_

This MVP of a Multipage Application was developed to:
  * Help you to have a better understanding of the correct structure of a web project.

  * Create reusable components. In this Application you can find a searchbar and content created dinamically.

## Technologies Used

This project was build using **Webpack** to bundle.

In this exercise you will find separate files for user interface and any kind of business logic. You will work with **Scss** with *BEM*, **JS**, and **HTML**.

You will find BEM structure in **Sass** files.

## Project Set Up
The application runs in `npm 6.8.0` and `node v8.9.3`.

  Install node dependencies executing `npm install`.

  You can run the app locally running `npm start`. It will be served at `http://localhost:8080`.

## Folder Structure

The code is inside of each component following the structure below:

```
frontend
├── package.json
├── README.md
└── src /
    ├── index.html
    ├── index.js
    ├── main.scss
    ├── assets/
    └── components/
        ├── helpers.js
        ├── menu/
        |    ├── menu.js
        |    └──  menu.scss
        ├── filters/
        |    ├── filters.js
        |    └── filters.scss
        └── searchbar/
            ├── DataRetriever.js
            ├── DropDown.js
            ├── TextRetriever.js
            ├── searchbar.js
            └── searchbar.scss

```

## Improvements

In order to write better code, I recomend the following improvements:

  * The search bar component has several improvements in the callback use.

  * The filter component needs to separate its logic in a more complex file structure to improve the decoupling.

  * The HTML file should be separated in dynamic compontents.

  * Consider use unit testing or TDD aproach.
