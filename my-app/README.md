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
7) backend/Grid.js holds all button arrangements. This allows us to pass information between buttons.Through this implementation, we can manipulate each button individually or as a group.
8) backend/Danger.js holds the information for each button-danger (ie if a button contains a bomb). We can pass this information between buttons, allowing each button to know how many bombs surround it
9) backend/WinCheck.js simply shows a loss message
10) backend/getRandomInt.js simply holds a function which returns a random int within a certain range. This is used for randomly allocating bombs and opening of safe neighouring buttons (when a button is clicked).