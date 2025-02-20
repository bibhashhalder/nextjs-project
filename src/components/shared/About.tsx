'use client'
import React, { useEffect, useRef } from 'react';
import {motion, useScroll} from 'motion/react';
import Aos from 'aos';
import "aos/dist/aos.css";
const About = () => {
    useEffect(()=>{
        Aos.init()
    },[]);
    const scrollRef =useRef(null);
    const {scrollYProgress} =useScroll({
        target:scrollRef,
        offset:['0 1','1 1'],
    })
    return (
        <div
        data-aos="zoom-in-up"
        data-aos-duration="1000"
        className='w-[80%] mx-auto'>
            <motion.div
            ref={scrollRef}
            style={{
                scale:scrollYProgress
            }}
            >
                    <h1 className='text-center w-[80%] mx-auto text-8xl mt-4 overflow-hidden font-bold'>Who I am</h1>
            </motion.div>
            <hr className='w-full h-6 bg-slate-700 rounded-xl my-4' />
            <p className='text-justify font-semibold'>I am Front-End Developer who specializes in building the visual and interactive elements of a website or web application. I just use technologies like HTML, CSS, and JavaScript, along with frameworks such as React to create user-friendly interfaces. Their role involves ensuring responsive design, optimizing performance, and enhancing user experience by collaborating with designers and back-end developers.</p>
        </div>
    );
};

export default About;