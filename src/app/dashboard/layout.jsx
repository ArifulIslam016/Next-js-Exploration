import Link from 'next/link';
import React from 'react';

const layout = ({children}) => {
    return (
        <div className='grid grid-cols-12 gap-1 mx-auto'>
            <div className='col-span-3 flex flex-col gap-2 rounded-2xl justify-center'>
                <Link className='bg-gray-500' href='/dashboard/add-story'>Add Storie</Link>
                <Link className='bg-gray-500' href='/dashboard/manage-story'>Manage Story</Link>
            </div>
            <div className='col-span-8'>
                {children}
            </div>
            
        </div>
    );
};

export default layout;