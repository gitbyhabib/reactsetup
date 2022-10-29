import React from 'react';

const User = ({render}) => {
    return (
        <div>
           {render (false)}
        </div>
    );
}

export default User;
