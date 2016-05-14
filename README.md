# sf-budget-visualization
Visualization of cash flow in the San Francisco budget. Made with React.js, Flux, D3.js, Babel, and Webpack.

View it live at [http://sf-budget-visualization.herokuapp.com/](http://sf-budget-visualization.herokuapp.com/)

## To install and run locally
1. Clone repository and cd into the directory
2. Install node_modules by typing ```npm install```
3. ```npm start``` to start the server at [http://localhost:8080/](http://localhost:8080/)
4. Alternatively, you can watch all the build tools and the server if you run ```npm watch```

## Issues that can be addressed:
- Incorporate negative cash flow data into diagram
- Resize container div so that it does not crop out portions of the interior svg
- Improve resizing so that highly granular data, i.e. the sub-object field, is easier to view
- Use a tooltip to show additional details when hovering over a node or a link
- Use [lifecycle methods for D3.js](http://nicolashery.com/integrating-d3js-visualizations-in-a-react-app/)
