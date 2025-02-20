import React from 'react';

const Navbar = () => {
    return (
        <div className='w-full flex items-center bg-zinc-700 py-5 fixed z-10'>
            <h1 className='text-white w-1/12 text-4xl mx-auto'>PortFolio</h1>
            <div className=' flex list-none justify-center  gap-4  w-[80%] mx-auto text-white'>
                <li><a href="">Home Page</a></li>
                <li><a href="">About Page</a></li>
                <li><a href="">My Project</a></li>
            </div>
        </div>
    );
};

export default Navbar;