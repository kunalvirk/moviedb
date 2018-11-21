import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import css from './nav.css';

class TopNav extends Component {

    state = {
        navItems : [
            {
                text : "Home",
                link : "/",
                style : css.navItem,
            },
            {
                text : "About",
                link : "/about",
                style : css.navItem,
            },
            {
                text : "Contact",
                link : "/contact",
                style : css.navItem,
            }
        ]
    }

    navItems = () => {
        let items = this.state.navItems;
        return items.map((item, i) => (
            <li key={i}>
                <Link to={item.link}>{item.text}</Link>
            </li>
        ))
    }

    render() {
        return (
            <ul className={css.navbar}>
                {this.navItems()}
            </ul>
        );
    }
}

export default TopNav;