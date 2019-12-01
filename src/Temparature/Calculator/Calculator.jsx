import React, { Component, Fragment } from 'react';
import Textinput from '../Textinput/Textinput';
import './Calculator.css';
export default class Calculator extends Component{
    constructor(props){
        super(props);
        this.props = props;
        this.state = {fahrenheit : '', celcius : ''}
    }
    toFahrenheit = (celciusValue) =>{
        if(celciusValue.trim()===''){
            this.setState({fahrenheit : '',celcius : '' });
        }
        else{
            let fahrenheitEquivalent = (celciusValue * 9 / 5) + 32;
            fahrenheitEquivalent = Math.round(fahrenheitEquivalent * 1000) / 1000;
            this.setState({fahrenheit : fahrenheitEquivalent,celcius : celciusValue });
        }
    }
    toCelcius = (fahrenheitValue) =>{
        if(fahrenheitValue.trim()===''){
            this.setState({fahrenheit : '',celcius : '' });
        }
        else{
            let celciusEquivalent = (fahrenheitValue - 32) * 5 / 9;
            celciusEquivalent = Math.round(celciusEquivalent * 1000) / 1000;
            this.setState({fahrenheit : fahrenheitValue,celcius : celciusEquivalent});
        }
    }
    render(){
        return(
            <Fragment>
                <Textinput scale='Celcius' handleChange = {this.toFahrenheit} value={this.state.celcius}/>
                <Textinput scale='Fahrenheit' handleChange = { this.toCelcius } value ={this.state.fahrenheit}/>
            </Fragment>
        );
    }
}

