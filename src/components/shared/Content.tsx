'use client'
import Image from 'next/image';
import Aos from 'aos'
import "aos/dist/aos.css";
import React, { useEffect, useRef } from 'react';
import image from '@/assest/html.png'
import image1 from '@/assest/css.png'
import image2 from '@/assest/javascript.jpg'
import image3 from '@/assest/Benefits-of-ReactJS.jpg'
import image4 from '@/assest/tailwind.png'
import image5 from '@/assest/mongodb.jpg'
import image6 from '@/assest/mongoose.png'
import image7 from '@/assest/nodejs.png'
import image8 from '@/assest/nextjs.png'
import image9 from '@/assest/redux.png'
import image10 from '@/assest/postgresql.png'
import image11 from '@/assest/prisma.jpg'
import image12 from '@/assest/typescript1.jpg'
import image13 from '@/assest/aws.png'
import image14 from '@/assest/docker.png'

import Marquee from "react-fast-marquee";
const Content = () => {
    useEffect(()=>{
    Aos.init();
    },[]);
    return (
        <div className='w-full  bg-gray-600 pb-6'>
            <div className='w-[80%] mx-auto '>
            <h1 className='text-5xl text-center font-bold py-4 mb-5 animate__animated animate__fadeInUpBig'>See My All Skill</h1>
            <Marquee className='my-4'>
                <div className='mx-[30px]'><Image className='w-[50px] h-[50x] rounded-lg' src={image} alt="alt" /></div>
                <div className='mx-[30px]'><Image className='w-[50px] h-[50x] rounded-lg' src={image1} alt="alt" /></div>
                <div className='mx-[30px]'><Image className='w-[50px] h-[50x] rounded-lg' src={image2} alt="alt" /></div>
                <div className='mx-[30px]'><Image className='w-[50px] h-[50x] rounded-lg' src={image3} alt="alt" /></div>
                <div className='mx-[30px]'><Image className='w-[50px] h-[50x] rounded-lg' src={image4} alt="alt" /></div>
                <div className='mx-[30px]'><Image className='w-[50px] h-[50x] rounded-lg' src={image5} alt="alt" /></div>
                <div className='mx-[30px]'><Image className='w-[50px] h-[50x] rounded-lg' src={image6} alt="alt" /></div>
                <div className='mx-[30px]'><Image className='w-[50px] h-[50x] rounded-lg' src={image7} alt="alt" /></div>
                <div className='mx-[30px]'><Image className='w-[50px] h-[50x] rounded-lg' src={image8} alt="alt" /></div>
                <div className='mx-[30px]'><Image className='w-[50px] h-[50x] rounded-lg' src={image9} alt="alt" /></div>
                <div className='mx-[30px]'><Image className='w-[50px] h-[50x] rounded-lg' src={image10} alt="alt" /></div>
                <div className='mx-[30px]'><Image className='w-[50px] h-[50x] rounded-lg' src={image11} alt="alt" /></div>
                <div className='mx-[30px]'><Image className='w-[50px] h-[50x] rounded-lg' src={image12} alt="alt" /></div>
                <div className='mx-[30px]'><Image className='w-[50px] h-[50x] rounded-lg' src={image13} alt="alt" /></div>
                <div className='mx-[30px]'><Image className='w-[50px] h-[50x] rounded-lg' src={image14} alt="alt" /></div>

            </Marquee>
                <div className='w-full '>
                    <div
                    data-aos="fade-up-left"
                    data-aos-duration="1000"
                    className='flex my-16 w-full lg:flex-row md:flex-col sm:flex-col gap-4 h-full items-center '>
                        <div className='w-5/6 animate__animated animate__fadeInLeftBig'>
                            <Image className='w-full h-full rounded-lg' src={image}alt=''/>
                        </div>
                        <div className='animate__animated animate__fadeInRightBig'>
                            <h1 className='text-2xl text-center  font-semibold '><span className='text-3xl font-bold'>HTML:</span>  The Foundation of Web Development</h1>
                            <p className='text-justify'>HTML  is the standard language for creating and structuring web pages. It uses elements like headings, paragraphs, links, images, and forms to define content. Combined with CSS for styling and JavaScript for interactivity, HTML forms the foundation of web development.</p>
                        </div>
                    </div>
                    <div
                    data-aos="fade-up-right"
                    data-aos-duration="1000"
                    className='flex my-16 w-full gap-4 md:flex-col sm:flex-col lg:flex-row-reverse  items-center'>
                        <div className='w-5/6 animate__animated animate__fadeInRightBig'>
                            <Image className='w-full h-64' src={image1}alt=''/>
                        </div>
                        <div className='animate__animated animate__fadeInLeftBig'>
                            <h1 className='text-2xl text-center font-semibold'><span className='text-3xl font-bold'>CSS:</span> Styling the Web with Creativity and Flexibility using </h1>
                            <p className='text-justify'>CSS is a stylesheet language used to control the appearance of HTML elements. It allows developers to apply colors, fonts, layouts, animations, and responsiveness to web pages, enhancing user experience. CSS works alongside HTML and JavaScript to create visually appealing and dynamic websites..</p>
                        </div>
                    </div>
                    <div
                    data-aos="fade-up-left"
                    data-aos-duration="1000"
                    className='flex my-16 items-center lg:flex-row md:flex-col sm:flex-col'>
                        <div className='w-5/6 animate__animated animate__fadeInLeftBig'>
                            <Image className='w-64 h-64 mx-auto' src={image2}alt=''/>
                        </div>
                        <div className='animate__animated animate__fadeInRightBig'>
                            <h1 className='text-2xl text-center font-semibold'><span className='text-3xl font-bold'>JavaScript:</span> Bringing Interactivity to the Web</h1>
                            <p className='text-justify'>JavaScript is a powerful programming language used to add interactivity, dynamic content, and functionality to web pages. It enables features like animations, form validation, real-time updates, and interactive user interfaces. JavaScript works alongside HTML and CSS, making it a core technology for modern web development.</p>
                        </div>
                    </div>
                    <div
                    data-aos="fade-up-right"
                    data-aos-duration="1000"
                    className='flex my-16 w-full gap-4 lg:flex-row-reverse md:flex-col sm:flex-col  items-center'>
                        <div className='w-5/6 animate__animated animate__fadeInRightBig'>
                            <Image className='w-full h-64' src={image3}alt=''/>
                        </div>
                        <div className='animate__animated animate__fadeInLeftBig'>
                            <h1 className='text-2xl text-center font-semibold'><span className='text-3xl font-bold'>React.js:</span> Build Dynamic & Efficient UIs</h1>
                            <p className='text-justify'>React.js is a powerful JavaScript library for building fast, interactive, and reusable user interfaces. It enables developers to create dynamic web applications efficiently with a component-based architecture and a virtual DOM for optimized performance.</p>
                        </div>
                    </div>
                    <div
                    data-aos="fade-up-left"
                    data-aos-duration="1000"
                    className='flex my-16 w-full gap-4 lg:flex-row md:flex-col sm:flex-col  items-center'>
                        <div className='w-5/6 animate__animated animate__fadeInRightBig'>
                            <Image className='w-full h-64' src={image8}alt=''/>
                        </div>
                        <div className='animate__animated animate__fadeInLeftBig'>
                            <h1 className='text-2xl text-center font-semibold'><span className='text-3xl font-bold'>Next.js:</span> The React Framework for Fast & Scalable Web Apps</h1>
                            <p className='text-justify'>Next.js is a React framework that enables fast, scalable, and SEO-friendly web applications with features like server-side rendering (SSR), static site generation (SSG), and API routes. It simplifies development with built-in optimizations and seamless routing.</p>
                        </div>
                    </div>
                    <div
                    data-aos="fade-up-right"
                    data-aos-duration="1000"
                    className='flex mt-16 w-full gap-4 lg:flex-row-reverse md:flex-col sm:flex-col  items-center'>
                        <div className='w-5/6 animate__animated animate__fadeInRightBig'>
                            <Image className='w-full h-64' src={image12}alt=''/>
                        </div>
                        <div className='animate__animated animate__fadeInLeftBig'>
                            <h1 className='text-xl text-center font-bold'><span className='text-3xl font-bold'>TypeScript:</span> Strongly Typed JavaScript for Scalable Development</h1>
                            <p className='text-justify'>TypeScript is a superset of JavaScript that adds static typing, improving code quality, maintainability, and developer productivity. It helps catch errors early and enables better tooling support for scalable applications.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Content;