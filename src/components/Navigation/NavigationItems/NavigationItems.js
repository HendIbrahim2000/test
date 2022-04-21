import React from 'react';

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" active>Products</NavigationItem>
        <NavigationItem link="/">Categories</NavigationItem>
    </ul>
);

export default navigationItems;