import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import poke from '../assets/pngegg.png';
import classes from '../cssModules/HomePage.module.css'

const HomePage = () => {

    const navigate = useNavigate();

    return (
        <div className={classes.Div}>
                <div className={classes.BackgroundImageFrame}>
                    <div className={classes.BackgroundImage}>
                    <div className={classes.Container}>
                        <div className={classes.Top}>
                            <img src={poke} alt="pokemon_logo"/>
                            <button onClick={() => {
                                navigate("search")
                            }} className={classes.Button}>Search</button>
                        </div>
                        <div className={classes.Bottom}>
                            <h1>Pokedex is a database that allows you to search up your favorite Pokemon!</h1>
                        <button onClick={() => {
                                navigate("pokemonList")
                            }} className={classes.Button}>View All</button>
                        </div>
                        </div>
                    </div>
                </div>
                <div>
                </div>
                <div>
                </div>
            
        </div>
    );
};

export default HomePage;