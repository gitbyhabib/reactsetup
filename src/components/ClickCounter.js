import React from 'react';

function ClickCounter ({count,incrementcount}) {
        return (
            <div>
               <button onClick={incrementcount} >clicked {count} times</button>
            </div>
        );
    
}
export default ClickCounter;
