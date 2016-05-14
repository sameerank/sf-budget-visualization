# sf-budget-visualization
Visualization of cash flow in the San Francisco budget. Made with React.js, Flux, D3.js, Babel, Webpack, and Sass.

View it live at [http://sf-budget-visualization.herokuapp.com/](http://sf-budget-visualization.herokuapp.com/)

#### To install and run locally:
1. Clone repository and cd into the directory
2. If you don't have Node.js, [you'll want to get that first](https://docs.npmjs.com/getting-started/installing-node).
3. Install node_modules by typing ```npm install```
4. ```npm start``` to start the server at [http://localhost:8080/](http://localhost:8080/)
5. Alternatively, you can watch all the build tools and the server if you run ```npm run watch```

#### Issues that can be addressed:
- Incorporate negative cash flow data into the diagram
- Resize container div so that it does not crop out portions of the interior svg
- Improve resizing so that highly granular data, e.g. the sub-object field, is easier to view
- Use a tooltip to show additional details when hovering over a node or a link
- Use [lifecycle methods for D3.js](http://nicolashery.com/integrating-d3js-visualizations-in-a-react-app/)
- Write [tests](https://facebook.github.io/jest/docs/tutorial-react.html)
