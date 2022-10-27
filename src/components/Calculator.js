import React, { Component } from 'react';
import Boil from './Boil';

class Calculator extends Component {

    state = {
        temperature:''
    }
    onTempchange = (e) => {
        this.setState({
            temperature: e.target.value,
        })
    }
    render() {


        const {temperature} =this.state
        return (
            <div>
                <fieldset>
                    <legend>Enter temperature in celcius:</legend>
                    <input type="text" value={temperature} onChange={this.onTempchange} />
                </fieldset>

                <Boil celsius={parseFloat(temperature)}/>
            </div>
        );
    }
}

export default Calculator;