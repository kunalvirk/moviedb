import React from 'react';
import TopNav from '../Navigation/TopNav';  
import Search from '../header/Search/Search';

import css from './header.css';

const Header = () => {
    const logo = () => {
        let logo = "imgs/tmdb-logo.svg";
        return <img src={logo} alt="" />
    }

    return (
        <header>
            <div className="container">
                <div className={css.topHeader}>
                    <div className={css.logo}>
                        {logo()}
                    </div>
                    <TopNav />
                </div>
                <div>
                    <Search />
                </div>
            </div>
        </header>
    );
};

export default Header;