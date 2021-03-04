import React from 'react';

class Entry extends React.Component{
    constructor(props){
        super(props);
        this.state = {value: '',
                      text: this.props.text,
                      fun: this.props.fun};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({value: event.target.value});
    }

    handleSubmit(event){
        event.preventDefault();
        this.state.fun(this.state.value, this.state.text);
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