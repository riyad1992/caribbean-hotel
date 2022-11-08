import React from 'react';
import Contact from '../Contact/Contact';
import Rooms from '../Rooms/Rooms';
import Banner from './Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Rooms></Rooms>
            <Contact></Contact>
        </div>
    );
};

export default Home;