
/* import React, { Component } from "react";
const withCounter = (Originalcomponent) => {
    class Newcomponent extens Component {
            state = {
        count: 0,
    };

    incrementcount = () => {
        this.setState((prevState) => ({ count: prevState.count + 1 }));
    }
        
        render() {
            const { count } = this.state;
            return <Originalcomponent count={ count} incrementcount={this.incrementcount} />
        },
    }
    return Newcomponent;
}
export default withCounter; */

import React from 'react';

const withCounter = (OriginalComponent) => {
    class NewComponent extends React.Component {
        state = {
            count: 0,
        };

        incrementCount = () => {
            this.setState((prevState) => ({ count: prevState.count + 1 }));
        };

        render() {
            const { count } = this.state;
            return <OriginalComponent count={count} incrementCount={this.incrementCount} />;
        }
    }
    return NewComponent;
};
export default withCounter;