import React from 'react';
import HeaderItem from './HeaderItem/HeaderItem';
import classes from './Header.module.css';

const Header = (props) => {

    const ITEMS = ['Home', 'About', 'Works', 'Contact'];

    let header = ITEMS.map(el => (
        <HeaderItem key={el}>{el}</HeaderItem>
    ));

    return (
        <div className={classes.Header}>
            <ul className={classes.ul}>
                {header}
            </ul>
        </div>

    );

};
export default Header;