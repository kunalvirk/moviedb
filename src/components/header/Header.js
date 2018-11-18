import React from 'react';

const Header = () => {
    const logo = () => {
        let logo = "imgs/tmdb-logo.svg";
        return <img src={logo} alt="" />
    }

    return (
        <header>
            <div className="logo">
                {logo()}
            </div>
        </header>
    );
};

export default Header;