import React from 'react';

function HoverCounter({count,incrementcount}) {
        return (
            <div>
               <h1 onMouseOver={incrementcount} >Mouse Over {count} times</h1>
            </div>
        );
}

export default HoverCounter;
