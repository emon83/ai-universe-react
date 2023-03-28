import React from 'react';

const Button = ({children}) => {
    //console.log(props);
    return (
        <div className='text-center mt-4'>
            <button className="btn btn-outline btn-secondary btn-sm">{children}</button>
        </div>
    );
};

export default Button;