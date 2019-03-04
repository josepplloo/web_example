fronted-exercise
================
  _Multi Page Application Exercise_

  > This exercise was taken from [andrscrrn](https://github.com/andrscrrn/hb-multipage-site)

This exercise will help you to have a better understanding of the correct structure of a web project.

# Tecnologies Used

In this exercise you should separate the user interface from any kind of business logic. For this you can use separate *modules* that are connected using dependencies (`import` and `export`).

**pug**
**scss**
**JS**


# Project Set Up
It project was developed in `node v8.9.3` & `npm 5.6.0`. First of all please install the follow dependencies, also you should check the `package.json` file.

## Folder Structure

The code is inside each component.

```
frontend
└── src
    ├── assets
    ├── data
    └── components
        ├── menu ...
        ├── filters ...
        └── searchbar ...
            
```

## Dependencies
  >npm i -D webpack webpack-dev-server webpack-cli html-webpack-plugin copy-webpack-plugin css-loader node-sass pug pug-loader sass-loader style-loader

```json
"Dependencies": {
    "copy-webpack-plugin": "^5.0.0",
    "css-loader": "^2.1.0",
    "html-webpack-plugin": "^3.2.0",
    "node-sass": "^4.11.0",
    "pug": "^2.0.3",
    "pug-loader": "^2.4.0",
    "sass-loader": "^7.1.0",
    "style-loader": "^0.23.1",
    "webpack": "^4.29.6",
    "webpack-cli": "^3.2.3",
    "webpack-dev-server": "^3.2.1"
}
```

## Data structure
```json
{
   "logo": {
      "img": "assets/logo.png",
      "link": "#"
    },
   "links":[
      {
         "label":"Features",
         "url":"#",
         "items":[

         ]
      },
      {
         "label":"Plans",
         "url":"#",
         "items":[
           
         ]
      },
      {
         "label":"Organizations",
         "url":"#",
         "items":[
            
         ]
      },
      {
         "label":"Browse courses",
         "url":"#/ideas",
         "items":[
           
         ]
      },
      {
         "label":"Support",
         "url":"#/news",
         "items":[

         ]
      }         
   ],
   "login":[
    {
       "label":"Sing In",
       "url":"#"
    },
    {
       "label":"7 day trial",
       "url":"#"
    }
  ]
}
```


