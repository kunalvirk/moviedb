import React from 'react';

import HeroSlider from './header/HeroSlider/HeroSlider';


const Home = () => {
    return (
        <div>
           <HeroSlider slides={5} />
        </div>
    );
};

export default Home;