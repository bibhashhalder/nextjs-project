import React from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import Content from './Content';
import About from './About';


const Header = () => {
    return (
        <div>
            <Navbar/>
            <Banner/>
            <Content/>
            <About/>
        </div>
    );
};

export default Header;