import React, { Component } from 'react';
import ButtonRow from './ButtonRow.jsx';
class ButtonGrid extends Component{
    constructor(props) {
        super(props);
        this.state = {numOfRow: this.props.row,
                      numPerRow: this.props.col};
      }

    showButtonRow(num){
        let ButtonGridList = [];
        for(var i=0;i<num;i++){
            ButtonGridList.push(i);
        }
        return ButtonGridList;
    }

    renderButtonRow(){
        return this.showButtonRow(this.state.numOfRow).map((stats) => {
            return (
                <div key={stats} >
                    <ButtonRow row={stats} num={this.state.numPerRow}></ButtonRow>
                </div>
            );
        });
    }

    render(){
       return(
          this.renderButtonRow()
       );
    }
 }
 export default ButtonGrid;