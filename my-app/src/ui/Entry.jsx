import React from 'react';
import App from '../backend/App.js';

class Entry extends React.Component{
    constructor(props){
        super(props);
        this.state = {value: '',
                      text: this.props.text};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({value: event.target.value});
    }

    handleSubmit(event){
        event.preventDefault();
        if(this.state.text === "Number of Rows:"){
            App.noOfRows = this.state.value?this.state.value:16;
        }
        else{
            App.noOfCols = this.state.value?this.state.value:30;
        }
        if(App.noOfRows && App.noOfCols){
            App.start();
        }
    }

    render(){
        return(<form onSubmit={this.handleSubmit}>
            <label>
                {this.state.text}
                <input type="text" pattern="[0-9]*"
                onInput={this.handleChange} value={this.state.value} />
                <br></br>
            </label>
        </form>) ;
    }

}

export default Entry;