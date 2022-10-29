import { Component } from 'react';

class Emoji extends Component {


    addBracket = (text) => `[ ${text} ]`;
    render() {
        return this.props.children({ addBracket: this.addBracket});
    }
}

export default Emoji;