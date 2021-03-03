import React, { Component } from 'react';
import Button from './Button.jsx';
import getRandomInt from '../backend/getRandomInt.js';
class ButtonRow extends Component{
    constructor(props) {
        super(props);
        this.state = {num: this.props.num,
                      row: this.props.row};
      }

    showButton(num){
        let ButtonRowList = [];
        for(var i=0;i<num;i++){
            ButtonRowList.push(i);
        }
        return ButtonRowList;
    }

    renderButton(){
        return this.showButton(this.state.num).map((stats) => {
            var randnum = getRandomInt(0,9);
            randnum = randnum <= 1? 1: 0;
            return (
                <Button key={stats} row={this.state.row} col={stats} danger={randnum}></Button>
            );
        });
    }

    render(){
       return(
           this.renderButton()
       );
    }
 }
 export default ButtonRow;