import React, { Component } from 'react';
import { convert, toCelcius, toFarenheit } from '../lib/converter';
import Boil from './Boil';
import Input from './Input';
class Calculator extends Component {
    state={temperature:'',scale:'c'}
    handleChange = (e,scale) => {
        this.setState({
            temperature: e.target.value,
            scale,
        });
    }
    render() {
const {temperature,scale} =this.state;
const celcius = scale==='f'? convert(temperature,toCelcius): temperature;
const farenheit = scale==='c'? convert(temperature,toFarenheit): temperature;
        return (
            <div>
                <Input scale='c' temperature={celcius} onTempchange={this. handleChange}/>
                <Input scale='f' temperature={farenheit} onTempchange={this.handleChange}/>
                <Boil celsius={parseFloat(temperature)}/>
            </div>
        );
    }
}
export default Calculator;