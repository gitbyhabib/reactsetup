import React, { Component } from 'react';

class Emoji extends Component {


    addEmoji =(text,emoji) => `${emoji} ${text} ${emoji}`
    render(overright) {
        let text = 'I am the emoji component';
        if (overright) text = overright;
        return (
            <div>
                {text}
            </div>
        );
    }
}

export default Emoji;