export function toCelcius(farenheit){
    return ((farenheit-32)*5)/9;
}
export function toFarenheit(celcius){
    return (celcius*9)/5+32;
}
export function convert(temperature,convertTO){
    const input =parseFloat(temperature);
    if(Number.isNaN(input)){
        return '';
    }
    const output = convertTO(input);
    const round = Math.round(output *1000)/1000;
    return round.toString();
}
