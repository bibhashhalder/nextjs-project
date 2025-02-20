'use client'
import Image from 'next/image';
import React from 'react';
import image from '@/assest/bibhash.jpg'
import Typewriter from "typewriter-effect";
import 'animate.css';
import Link from 'next/link';
import {Variants, motion} from 'framer-motion'

const animateImg:Variants ={
    initial:{y:0},
    animate:{
        y:20,
        transition:{
            repeat:Infinity,
            duration:2,
            repeatType:'reverse',
            ease:'easeInOut'
        }
    }
}
const Banner = () => {
    return (
       <div className=' bg-gray-600 w-full h-full py-36 relative top-5 '>
         <div className='pt-5 flex justify-between w-[80%] mx-auto items-center lg:flex-row flex-col-reverse'>
           <div>
                <div className='my-6 animate__animated animate__fadeInDownBig '>
                <h1 className='lg:text-5xl lg:ml-0 sm:text-2xl sm:ml-5 md:ml-10 font-semibold '>Hi, I am <span className='text-lime-400 font-bold'> <Typewriter
                options={{
                strings: ['BIBHASH HALDER'],
                autoStart: true,
                loop: true,
            }}
            /></span></h1>
                    <p className='lg:text-lg lg:ml-0 md:text-lg sm:text-xl text-center sm:m-0 font-normal text-white'>A passionate in Front End developer with  modern and scalable web applications.</p>
                </div>
                <div className='flex  gap-4 sm:mx-auto sm:w-5/12 md:mx-auto md:w-4/12 animate__animated animate__fadeInLeftBig'>
                    <button className='border p-2  rounded-lg bg-slate-500 text-white'>My Project</button>
                    <Link href='https://www.linkedin.com/in/bibhash-halder-639951204/'><button className='border p-2  rounded-lg bg-slate-500 text-white'>Linked In</button></Link>
                </div>
           </div>
            <motion.div
            variants={animateImg}
            initial='initial'
            animate='animate'

            >
                 <Image  className='animate__animated animate__fadeInRightBig   image rounded-full mt-5 mx-auto' src={image} alt='banner image'/>
            </motion.div>
        </div>
       </div>
    );
};

export default Banner;