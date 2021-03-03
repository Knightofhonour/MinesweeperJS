In the project directory(my-app/src), you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

Code Structure:
1) index.js is the starting point. This renders the form input, which is required to dynamically build the minesweeper grid (based on number of rows and columns)
2) ui/Entry.jsx is the React implementation of the form input. It accepts the inputs and passes it to App.js
3) backend/App.js accepts the form inputs and instantiates, Grid, Danger, and ButtonGrid
4) ui/ButtonGrid.jsx simply holds (multiple) ButtonRow, and is the React implementation of the minesweeper grid
5) ui/ButtonRow.jsx simple holds (multiple) Button
6) ui/Button.jsx is the React implementation of the buttons in the minesweeper grid. This is also connected to Grid.js and Danger.js. 
