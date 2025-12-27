import React from 'react';

const Title = ({children}) => {
    return (
        <div className='text-3xl bg-gray-300 p-3'>
            {children}
        </div>
    );
};

export default Title;