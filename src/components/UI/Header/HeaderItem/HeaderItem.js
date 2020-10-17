import React from 'react';
import classes from './HeaderItem.module.css';

const HeaderItem = (props) => {
    return (
    <li>{props.children}</li>
    );
};

export default HeaderItem;