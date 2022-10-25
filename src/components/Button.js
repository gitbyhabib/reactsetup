import React, { Component } from 'react';

class Button extends Component {

    shouldComponentUpdate(nextprops) {
        const { change:currentchange,locale:currentlocal } = this.props;

        const { change: nextchange, locale:nextlocal } = nextprops;
        
        if (currentchange === nextchange && currentlocal===nextlocal) {
            return false;
        }
        else return true;
    }
    render() {

        

        console.log('button render')
        const {change,locale}=this.props
        return (
            <div>
                 <button type='button' onClick={()=>change(locale)}>Click here</button>
            </div>
        );
    }
}

export default Button;