import React from 'react';
import { Link } from 'react-router-dom';
import classes from '../cssModules/Navbar.module.css'

const Navbar = () => {
    return (
        <div className={classes.Div}>
            <Link to="/" className={classes.Link}>Home</Link>
            <Link to="search" className={classes.Link}>Search Pokemon</Link>
            <Link to="pokemonList" className={classes.Link}>Search Pokemon List</Link>
            <Link to="savedPokemonList" className={classes.Link}>Save Pokemon</Link>
            <Link to="allLists" className={classes.Link}>All Lists</Link>
        </div>
    );
};

export default Navbar;