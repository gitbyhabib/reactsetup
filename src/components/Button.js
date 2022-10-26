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
        const { change, locale, show, enable } = this.props
        
        if (!enable) return null;
        return (
            <div>
                <button className='btn btn-danger' type='button' onClick={() => change(locale)}>
                    {locale === 'bn-BD' ? 'Change clock' : 'Ghori poriborton korun'}</button>
               {show && <p>Lorem ipsum dolor isquam deleniti praesentium omnis?</p>}
            </div>
        );
    }
}
export default Button;
