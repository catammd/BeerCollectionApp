# BeerCollectionApp
A playground for using https://punkapi.com to create a beer collection app

## Getting started

### Install dependencies
First, navigate to the root folder in a terminal/commandline and run the following command to install the npm dependencies:

```bash
npm run install-all-packages
```

### Start development server

#### Fractal and StencilJS
To start up fractal devserver and also StencilJS devserver (for WebComponent development): 

```bash
npm start
```

You can now access fractal at [localhost:3000](http://localhost:3000).

#### Fractal

If you don't need to develop WebComponents, but just want fractal you can run:
```bash
npm run fractal
```

### Build
When you want to build the output run:
```bash
npm run build
```

This runs two other commands: `npm run build:webcomponents` and `npm run build:fractal`. 
The webcomponents are outputted into fractal/public/assets/scripts. 
When fractal builds, it takes everything from the fractal/public folder and output it into fractal/dist (including webcomponent files)

## Notes

This project is based on the following:

https://github.com/liip/styleguide-starterkit - A starterkit to create styleguides with Fractal and Webpack.

https://github.com/michaelthorne/itcss-boilerplate/ - Inverted Triangle CSS architecture boilerplate

https://stenciljs.com/ - The magical, reusable web component compiler