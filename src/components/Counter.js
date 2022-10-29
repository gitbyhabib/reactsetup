import { Component } from 'react';

class Counter extends Component {

    state={
        count:0,
       }
       incrementcount=()=>{
       this.setState((prevstate)=>({
           count: prevstate.count + 1
       }));
       }
    render() {


        const {children} =this.props
        const {count} =this.state;
        return  children( count, this.incrementcount);
    }
}

export default Counter;
