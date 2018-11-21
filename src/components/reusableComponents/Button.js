import React from 'react';
import {Link} from 'react-router-dom';

const Button = (props) => {

    return (
        <div>
            {props.action ? <Link to={props.link}>{props.text}</Link> : props.text} 
        </div>
    );
};

export default Button;