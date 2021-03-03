import React from 'react';
import './Button.css';
import Danger from '../backend/Danger.js';
import Grid from '../backend/Grid.js';
import WinCheck from '../backend/WinCheck.js';

class Button extends React.Component{
    constructor(props) {
        super(props);
        this.state = {danger: this.props.danger,
                      row: this.props.row,
                      col: this.props.col,
                      dangerSurround: undefined,
                      classname: "Button"};
        Danger.changeValue(this.state.row, this.state.col, this.state.danger);
        Grid.changeValue(this.state.row, this.state.col, this);
        this.disableClick = false;
        this.dangerSurround = undefined;
        this.handleClick = this.handleClick.bind(this);
        this.rightClick = this.rightClick.bind(this);
    }
    
    componentDidMount(){
        this.dangerSurround = Danger.getDanger(this.state.row, this.state.col);
    }

    handleClick(){
        if(this.state.dangerSurround === undefined && !this.disableClick){
            this.open();
            Grid.openSurroundings(this.state.row,this.state.col);
        }
    }
    
    open(){
        this.setState({dangerSurround: Danger.getDanger(this.state.row,this.state.col)});
        if(this.state.danger){
            this.setState({classname: "RedButton"});
            WinCheck.showLost();
            Grid.allButtonsDisabled();
        }
    }

    rightClick(e){
        e.preventDefault();
        if(this.state.dangerSurround === undefined){
            var activate = (this.state.classname) === "Button"? "BlueButton":"Button";
            this.setState({classname: activate});
            this.disableClick = !this.disableClick;
        }
    }

    showIfNotBlue(){
        if(this.state.classname !== "BlueButton"){
            return this.state.dangerSurround;
        }
        return undefined;
    }

    render(){
        return(
            <button onClick={this.handleClick} onContextMenu={(e) => this.rightClick(e)}
            className={this.state.classname}>
                {this.showIfNotBlue()}
            </button>
        );
    }
}
export default Button;