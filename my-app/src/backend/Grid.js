import getRandomInt from './getRandomInt.js';

class Grid{

    static noOfRows = 0;
    static noOfCols= 0;
    static rows = [];

    static createRows(){
        for(var i=0;i<this.noOfRows;i++){
            var row = [];
            for(var j=0;j<this.noOfCols;j++){
                row.push(0);
            }
            this.rows.push(row);
        }
    }

    static getValue(row, col){
        return this.rows[row][col];
    }

    static changeValue(row, col, value){
        this.rows[row][col] = value;
    }

    static openSurroundings(row, col){
        var buttonList = [];
        buttonList = Grid.pushIntoList(buttonList, row, col);
        for(var i=0;i<buttonList.length;i++){
            var button = buttonList[i];
            var open = getRandomInt(0, 2);
            var danger = button.dangerSurround;
            if((open === 0 || danger === 0) && (button.state.classname === "Button")){
                button.open();
                if(danger === 0){
                    Grid.openSurroundingsNoDanger(button.state.row, button.state.col);
                }
            }
        }
    }

    static openSurroundingsNoDanger(row, col){
        var buttonList = [];
        buttonList = Grid.pushIntoList(buttonList, row, col);
        for(var i=0;i<buttonList.length;i++){
            var button = buttonList[i];
            var danger = button.dangerSurround;
            if((danger === 0) && (button.state.classname === "Button")){
                button.open();
            }
        }
    }

    static pushIntoList(buttonList, row, col){
        var button1 = this.rows[row-1]?.[col-1]?this.rows[row-1][col-1]:undefined;
        if(button1 && !button1.state.danger){
            buttonList.push(button1);
        }
        var button2 = this.rows[row-1]?.[col]?this.rows[row-1][col]:undefined;
        if(button2 && !button2.state.danger){
            buttonList.push(button2);
        }
        var button3 = this.rows[row-1]?.[col+1]?this.rows[row-1][col+1]:undefined;
        if(button3 && !button3.state.danger){
            buttonList.push(button3);
        }
        var button4 = this.rows[row]?.[col-1]?this.rows[row][col-1]:undefined;
        if(button4 && !button4.state.danger){
            buttonList.push(button4);
        }
        var button5 = this.rows[row]?.[col+1]?this.rows[row][col+1]:undefined;
        if(button5 && !button5.state.danger){
            buttonList.push(button5);
        }
        var button6 = this.rows[row+1]?.[col-1]?this.rows[row+1][col-1]:undefined;
        if(button6 && !button6.state.danger){
            buttonList.push(button6);
        }
        var button7 = this.rows[row+1]?.[col]?this.rows[row+1][col]:undefined;
        if(button7 && !button7.state.danger){
            buttonList.push(button7);
        }
        var button8 = this.rows[row+1]?.[col+1]?this.rows[row+1][col+1]:undefined;
        if(button8 && !button8.state.danger){
            buttonList.push(button8);
        }
        return buttonList;
    }

    static allButtonsDisabled(){
        for(var i=0;i<this.rows.length;i++){
            for(var j=0;j<this.rows[i].length;j++){
                this.rows[i][j].disableClick = true;
            }
        }
    }
}

export default Grid;