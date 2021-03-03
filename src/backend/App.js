import React from 'react';
import ReactDOM from 'react-dom';
import ButtonGrid from '../ui/ButtonGrid';
import Danger from './Danger.js';
import Grid from './Grid.js';

class App{
    static noOfRows;
    static noOfCols;

    static start(){
        Danger.noOfRows = this.noOfRows;
        Danger.noOfCols = this.noOfCols;
        Danger.createRows();

        Grid.noOfRows = this.noOfRows;
        Grid.noOfCols = this.noOfCols;
        Grid.createRows();
        ReactDOM.render(
            <React.StrictMode>
            <ButtonGrid row={this.noOfRows} col={this.noOfCols}/>
            </React.StrictMode>,
            document.getElementById('grid')
        );
    }
}

export default App;