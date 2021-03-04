import React from 'react';
import ReactDOM from 'react-dom';
import Entry from './ui/Entry.jsx';
import ButtonGrid from '../src/ui/ButtonGrid';
import Danger from '../src/backend/Danger.js';
import Grid from '../src/backend/Grid.js';

var noOfRows = undefined;
var noOfCols = undefined;

function print(value, type){
  if(type === "Number of Rows:"){
    noOfRows = value?value:16;
  }
  else{
    noOfCols = value?value:30;
  }
  if(noOfRows && noOfCols){
    start();
  }
}

function start(){
  Danger.noOfRows = noOfRows;
  Danger.noOfCols = noOfCols;
  Danger.createRows();

  Grid.noOfRows = noOfRows;
  Grid.noOfCols = noOfCols;
  Grid.createRows();
  ReactDOM.render(
    <React.StrictMode>
    <ButtonGrid row={noOfRows} col={noOfCols}/>
    </React.StrictMode>,
    document.getElementById('grid')
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Entry fun={print} text={"Number of Rows:"}/>
  </React.StrictMode>,
  document.getElementById('row')
);

ReactDOM.render(
  <React.StrictMode>
    <Entry fun={print} text={"Number of Cols:"}/>
  </React.StrictMode>,
  document.getElementById('col')
);



