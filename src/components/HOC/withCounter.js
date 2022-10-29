import { Component } from 'react';

const WithCounter = (Originalcomponent) => {

    class Newcomponent extends Component {
        state={
            count:0,
           }
           incrementcount=()=>{
           this.setState((prevstate)=>({
               count: prevstate.count + 1
           }));
           }
           render(){
            const {count} = this.state;
            return <Originalcomponent count={count} incrementcount={this.incrementcount}/>
           }
    }
    return Newcomponent;
}

export default WithCounter;
