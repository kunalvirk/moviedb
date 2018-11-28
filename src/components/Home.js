import React from 'react';

import HeroSlider from './header/HeroSlider/HeroSlider';
import TrendingSection from './trending/Trending';

const Home = () => {
    return (
        <div>
            <div style={{
                backgroundImage: "radial-gradient(at 30% top, rgba(31, 40, 73, 1) 0%, rgba(8, 28, 36, 1) 70%)",
            }}>
                <HeroSlider slides={5} />
            </div>
           <TrendingSection genre="movie" /* tv or movie */ />
        </div>
    );
};

export default Home;