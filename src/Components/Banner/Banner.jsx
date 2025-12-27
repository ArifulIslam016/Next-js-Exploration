'use client'
import { useRouter } from 'next/navigation';
import React from 'react';

const Banner = () => {
const router=useRouter()
    const handleAddStory=()=>{
        const Password=prompt("Enter password")
        if(Password=='1234'){
            router.push("/dashboard")
        }
    }
    return (
        <div className='text-center bg-sky-500 p-10 space-y-4'>
          <h1 className='text-2xl text-white/70'>Welcome to dev story</h1>
          <button onClick={handleAddStory} className='bg-sky-300 p-3 rounded-2xl text-white cursor-pointer hover:bg-sky-600'>Add story</button>
        </div>
    );
};

export default Banner;