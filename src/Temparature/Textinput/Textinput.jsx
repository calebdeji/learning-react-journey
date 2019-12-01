import React, { Component } from 'react'
import './Textinput.css';
export default class Textinput extends Component {
    constructor(props){
        super(props);
        this.props = props;
    }
    handleChange = (event) =>{
        this.props.handleChange(event.target.value);
    }
    render(){
        return(
            <fieldset className="temperature-input">
                <legend>
                    Enter temperature in {this.props.scale}
                </legend>
                <input type="text" onChange = { this.handleChange } value = {this.props.value}/>
            </fieldset>
        );
    }
}