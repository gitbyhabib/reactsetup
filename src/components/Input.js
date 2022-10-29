import React from 'react';
const scaleName={
    c:'Celsius',
    f:'Farenheit'
}
export default function Input({temperature,scale,onTempchange}){
        return (
                <fieldset>
                    <legend>Enter temperature in {scaleName[scale]}:</legend>
                    <input type="text" value={temperature} onChange={(e)=>onTempchange(e,scale)} />
                </fieldset>
        );
}

