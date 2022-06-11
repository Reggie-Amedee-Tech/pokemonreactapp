import React from 'react';
import { Link } from 'react-router-dom';
import classes from '../cssModules/Navbar.module.css'

const Navbar = () => {
    return (
        <div className={classes.Div}>
            <Link to="home" className={classes.Link}>Home</Link>
            <Link to="search" className={classes.Link}>Search Pokemon</Link>
            <Link to="pokemonList" className={classes.Link}>Search Pokemon List</Link>
        </div>
    );
};

export default Navbar;