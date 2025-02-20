import Link from 'next/link';
import React from 'react';


const Project = () => {
    return (
        <div className='bg-gray-600 py-6 mt-6'>
            <div className='my-16 grid grid-cols-1 lg:grid-cols-2 gap-4 mx-auto w-[80%] '>
            <div className='w-full h-16 text-4xl font-semibold rounded-lg text-white bg-orange-500 flex justify-center items-center'><Link  href='https://amazing-frangipane-917411.netlify.app/'>Gymnatiam</Link></div>
            <div className='w-full h-16 text-4xl font-semibold rounded-lg text-white bg-orange-500 flex justify-center items-center'><Link  href='https://stupendous-sorbet-c26903.netlify.app/'>Earth Rotation</Link></div>
            <div className='w-full h-16 text-4xl font-semibold rounded-lg text-white bg-orange-500 flex justify-center items-center'><Link  href='https://zingy-lamington-46a217.netlify.app/'>MOTTO</Link></div>
            <div className='w-full h-16 text-4xl font-semibold rounded-lg text-white bg-orange-500 flex justify-center items-center'><Link  href='https://clever-sunflower-cf4c74.netlify.app/'>Emajahon</Link></div>
        </div>
        </div>
    );
};

export default Project;