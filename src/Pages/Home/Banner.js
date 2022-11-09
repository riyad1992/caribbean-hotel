import React from 'react';
import banner from '../../Images/PHOTO-2020-11-05-21-47-51.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { Link } from 'react-router-dom';

AOS.init();

const Banner = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={banner} className="max-w-sm rounded-lg shadow-2xl w-4/5" alt='' data-aos="zoom-in-right"/>
                <div>
                    <h1 data-aos="fade-up" data-aos-duration="3000" className="text-5xl font-bold">Best service, Best price guarantee!</h1>
                    <p className="py-6" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">Caribbean Hotel is located in one of the most privileged
                    business areas of the city, just 15 minutes from Philip Goldson international airport and
                    10 minutes from the citys downtown Belize City district. </p>
                    <Link to='rooms'><button className="btn btn-primary" data-aos="fade-up" data-aos-anchor-placement="center-center">Get Started</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;